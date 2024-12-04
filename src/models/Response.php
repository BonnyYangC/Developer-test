<?php

namespace App\Models;

class Response
{
  public string $questionId;
  public string $response;

  public function __construct(string $questionId, string $response)
  {
    $this->questionId = $questionId;
    $this->response = $response;
  }

  public static function fromArray(array $data): self
  {
    return new Response($data['questionId'], $data['response']);
  }
}
