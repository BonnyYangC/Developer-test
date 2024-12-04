<?php

namespace App\Reports;

use App\Models\Assessment;
use App\Utilities;
use App\Loaders\AssessmentsLoader;

class ProgressReport extends BaseReport
{
  private array $assessmentTotal;
  /** @var Assessment[] */
  private array $assessments;

  public function handle(): string
  {
    $this->loadStudent();
    $this->loadQuestions();
    $this->loadAssessment();
    $this->loadStudentResponses();
    $this->analysisStudentResponse();


    return $this->reportOutput();
  }

  private function analysisStudentResponse()
  {
    $result = [];
    foreach($this->studentResponses as $assessmentResponse)
    {
      if (!isset($result[$assessmentResponse->assessmentId]))
      {
        $result[$assessmentResponse->assessmentId] = [];
        $result[$assessmentResponse->assessmentId]['score'] = [];
        $result[$assessmentResponse->assessmentId]['total'] = 0;
        $result[$assessmentResponse->assessmentId]['name'] = $this->assessments[$assessmentResponse->assessmentId]->name;
      }
      $result[$assessmentResponse->assessmentId]['total']++;
      $date = Utilities::formatDataTime($assessmentResponse->completed);
      $result[$assessmentResponse->assessmentId]['score'][$date] = [
          'correct' => 0,
          'total' => 0
        ];
      foreach($assessmentResponse->responses as $response) {
        $question = $this->questions[$response->questionId];
        if ($question->config->key === $response->response) {
          $result[$assessmentResponse->assessmentId]['score'][$date]['correct']++;
        }
        $result[$assessmentResponse->assessmentId]['score'][$date]['total']++;
      }
    }
    $this->assessmentTotal = $result;
  }

  private function loadAssessment()
  {
    $assessments = AssessmentsLoader::create()->load();
    $indexedArray = [];
    foreach ($assessments as $a) {
      $indexedArray[$a->id] = $a;
    }
    $this->assessments = $indexedArray;
  }

  private function reportOutput():string
  {
    $output = '';
    foreach($this->assessmentTotal as $key => $assessment)
    {
      $output .= "{$this->student->firstName} {$this->student->lastName} has completed {$assessment['name']} assessment {$assessment['total']} times in total. Date and raw score given below:" . PHP_EOL;
      $output .= PHP_EOL;
      foreach($assessment['score'] as $date => $value)
      {
        $output .= "Date: {$date}, Raw Score: {$value['correct']} out of {$value['total']}" . PHP_EOL;
      }
      $diff = abs(reset($assessment['score'])['correct'] - end($assessment['score'])['correct']);
      $output .= PHP_EOL . "{$this->student->firstName} {$this->student->lastName} got {$diff} more correct in the recent completed assessment than the oldest" . PHP_EOL;
    }

    return $output;
  }
}