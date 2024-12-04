<?php

namespace App\Loaders;

use App\Models\StudentDetail;
use Exception;

class StudentsLoader
{
  private array $students;

  private string $studentId;

  public static function create()
  {
    return new StudentsLoader();
  }

  public function for(string $studentId): self
  {
    $this->studentId = $studentId;
    return $this;
  }

  public function load()
  {
    $jsonFile = 'students.json';
    try {
      $jsonContent = file_get_contents(__DIR__.'/../../data/' . $jsonFile);
      
      if($jsonContent === false) {
        throw new Exception("Could not read json file.");
      }

      $students = json_decode($jsonContent, true);
      if(json_last_error() !== JSON_ERROR_NONE) {
        throw new Exception("Json decoding error: ". json_last_error_msg());
      }

      $objects = array_map(function ($student) {
        return StudentDetail::fromArray($student);
      }, $students);

      // Filter out student by studentId
      return current(array_filter($objects, function (StudentDetail $object) {
        return $object->id === $this->studentId;
      }));

    } catch (Exception $e) {
      echo "Error: " . $e->getMessage() . PHP_EOL;
    }
  }
}