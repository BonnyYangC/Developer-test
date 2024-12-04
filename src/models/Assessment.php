<?php

namespace App\Models;

class AssessmentQuestion
{
  public string $questionId;
  public int $position;

  public function __construct(string $questionId, int $position)
  {
    $this->questionId = $questionId;
    $this->position = $position;
  }

  public static function fromArray(array $data): self
  {
    return new AssessmentQuestion(
      $data['questionId'],
      $data['position']
    );
  }
}

class Assessment
{
  public string $id;
  public string $name;

  /** @var AssessmentQuestion[] */
  public array $questions;

  public function __construct(string $id, string $name, array $questions)
  {
    $this->id = $id;
    $this->name = $name;
  }

  public static function fromArray(array $data): self
  {
    return new Assessment(
      $data['id'],
      $data['name'],
      array_map(function ($question) {
        return AssessmentQuestion::fromArray($question);
      }, $data['questions'])
    );
  }
}