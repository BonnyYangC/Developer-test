<?php

namespace App\Models;

class StudentDetail extends Student
{
  public string $firstName;
  public string $lastName;
  public function __construct(string $id, string $yearLevel, string $firstName, string $lastName)
  {
    parent::__construct($id, $yearLevel);
    $this->firstName = $firstName;
    $this->lastName = $lastName;
  }

  public static function fromArray(array $data): self
  {
    return new StudentDetail($data['id'], $data['yearLevel'], $data['firstName'], $data['lastName']);
  }
}