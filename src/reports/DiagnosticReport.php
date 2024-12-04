<?php

namespace App\Reports;

use App\Loaders\AssessmentsLoader;
use App\Models\ResponseDetail;
use App\Utilities;

class DiagnosticReport extends BaseReport
{
  private ResponseDetail $assessmentResponse;

  private array $assessmentDetailByStrand;
  private array $assessmentTotal;

  public function handle(): string | null
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
    $resultByStrand = [];
    $totalResult = [
      'correct' => 0,
      'total' => 0
    ];
    foreach($this->assessmentResponse->responses as $response) {
      $question = $this->questions[$response->questionId];
      if (!isset($resultByStrand[$question->strand])) {
        $resultByStrand[$question->strand] = [
          'correct' => 0,
          'total' => 0
        ];
      }
      if ($question->config->key === $response->response) {
        $resultByStrand[$question->strand]['correct']++;
        $totalResult['correct']++;
      }
      $resultByStrand[$question->strand]['total']++;
      $totalResult['total']++;
    }
    $this->assessmentDetailByStrand = $resultByStrand;
    $this->assessmentTotal = $totalResult;
  }

  private function reportOutput(): string
  {
    $completeDate = Utilities::formatDataTime($this->assessmentResponse->completed, true);
    $strandData = '';
    foreach($this->assessmentDetailByStrand as $key => $detail) {
      $strandData .= "{$key}: {$detail['correct']} out of {$detail['total']} correct" . PHP_EOL;
    }
    return "{$this->student->firstName} {$this->student->lastName} recently completed {$this->assessment->name} assessment on {$completeDate}
He got {$this->assessmentTotal['correct']} questions right out of {$this->assessmentTotal['total']}. Details by strand given below:

{$strandData}
    ";
  }
}