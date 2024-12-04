<?php

namespace App\Models;

class Results
{
  public int $rawScore;

  public function __construct(int $rawScore)
  {
    $this->rawScore = $rawScore;
  }

  public static function fromArray(array $data): self
  {
    return new Results($data['rawScore']);
  }
}