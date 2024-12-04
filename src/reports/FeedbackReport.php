<?php

namespace App\Reports;

use App\Loaders\AssessmentsLoader;
use App\Models\{Option, ResponseDetail};
use App\Utilities;

class FeedbackReport extends BaseReport
{
  private ResponseDetail $assessmentResponse;
  private array $assessmentTotal;

  public function handle(): string
  {
    $this->loadStudent();
    $this->loadQuestions();
    $this->loadStudentResponses();
    $this->assessmentResponse = current($this->studentResponses);
    $this->loadAssessment();
    $this->analysistAssessmentResponses();

    return $this->reportOutput();
  }

  private function loadAssessment()
  {
    $this->assessment = AssessmentsLoader::create()->for($this->assessmentResponse->assessmentId)->load();
  }
  private function analysistAssessmentResponses()
  {
    $totalResult = [
      'correct' => 0,
      'total' => 0,
      'wrong' => []
    ];
    foreach($this->assessmentResponse->responses as $response) {
      $question = $this->questions[$response->questionId];
      if ($question->config->key === $response->response) {
        $totalResult['correct']++;
      } else {
        $totalResult['wrong'][$question->id] = [
          'stem' => $question->stem,
          'key' => $question->config->key,
          'hint' => $question->config->hint,
          'correct' => current(array_filter($question->config->options, function (Option $option) use($question) {
            return $option->id === $question->config->key;
          })),
          'wrong' => current(array_filter($question->config->options, function (Option $option) use($response) {
            return $option->id === $response->response;
          }))
        ];
      }
      $totalResult['total']++;
    }
    $this->assessmentTotal = $totalResult;
  }

  private function reportOutput():string
  {
    $completeDate = Utilities::formatDataTime($this->assessmentResponse->completed, true);
    $wrongAnswers = PHP_EOL;
    foreach ($this->assessmentTotal['wrong'] as $key => $value)
    {
      $wrongAnswers .= "Question: {$value['stem']}" . PHP_EOL;
      $wrongAnswers .= "Your answer: {$value['wrong']->label} with value {$value['wrong']->value}" . PHP_EOL;
      $wrongAnswers .= "Right answer: {$value['correct']->label} with value {$value['correct']->value}" . PHP_EOL;
      $wrongAnswers .= "Hint: {$value['hint']}";
    }
    return "{$this->student->firstName} {$this->student->lastName} recently completed {$this->assessment->name} assessment on {$completeDate}
He got {$this->assessmentTotal['correct']} questions right out of {$this->assessmentTotal['total']}. Feedback for wrong answers given below
{$wrongAnswers}
";
  }
}