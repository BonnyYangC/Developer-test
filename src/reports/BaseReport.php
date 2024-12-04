<?php

namespace App\Reports;

use App\Loaders\QuestionsLoader;
use App\Loaders\ResponsesLoader;
use App\Loaders\StudentsLoader;
use App\Models\{Assessment, ResponseDetail, Question, StudentDetail};

class BaseReport
{
  protected string $studentId;
  protected StudentDetail $student;
  protected Assessment $assessment;
  /** @var ResponseDetail[] */
  protected array $studentResponses;
  /** @var Question[] */
  protected array $questions;

  public function for(string $studentId): self
  {
    $this->studentId = $studentId;
    return $this;
  }


  protected function loadStudent()
  {
    $this->student = StudentsLoader::create()->for($this->studentId)->load();
  }

  protected function loadStudentResponses()
  {
    $this->studentResponses = ResponsesLoader::create()->for($this->studentId)->load();
  }

  protected function loadQuestions()
  {
    $questions = QuestionsLoader::create()->load();
    $indexedArray = [];
    foreach ($questions as $q) {
      $indexedArray[$q->id] = $q;
    }
    $this->questions = $indexedArray;
  }
}