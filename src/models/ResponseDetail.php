<?php

namespace App\Models;

use DateTime;

class ResponseDetail
{
  public string $id;
  public string $assessmentId;
  public string $assigned;
  public string $started;
  public DateTime | string $completed;
  public Student $student;
  /** @var Response[] */
  public array $responses;
  public Results $results;

  public function __construct(array $data, Student $student, array $responses, Results $results)
  {
    $this->id = $data['id'];
    $this->assessmentId = $data['assessmentId'];
    $this->assigned = $data['assigned'];
    $this->started = $data['started'];
    $this->completed = isset($data['completed']) ? DateTime::createFromFormat('d/m/Y H:i:s', $data['completed']) : '';
    $this->student = $student;
    $this->responses = $responses;
    $this->results = $results;

  }

  public static function fromArray(array $data): self
  {
    return new ResponseDetail($data, 
      Student::fromArray($data['student']), 
      array_map(function ($response) {
        return Response::fromArray($response);
      }, $data['responses']) ,
      Results::fromArray($data['results']));
  }
}