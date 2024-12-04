<?php

namespace App\Models;

class Student
{
  public string $id;
  public int $yearLevel;

  public function __construct(string $id, int $yearLevel)
  {
    $this->id = $id;
    $this->yearLevel = $yearLevel;
  }

  public static function fromArray(array $data): self
  {
    return new Student($data['id'], $data['yearLevel']);
  }
}