<?php

namespace App\Loaders;

use Exception;

class Base
{
  private array $arrayContent;

  private string $studentId;

  public function for(string $studentId): self
  {
    $this->studentId = $studentId;
    return $this;
  }

  public static function load()
  {
    $jsonFile = 'student-responses.json';

    try {
      $jsonContent = file_get_contents(__DIR__.'/../../data/' . $jsonFile);
      
      if($jsonContent === false) {
        throw new Exception("Could not read json file.");
      }

      $arrayContent = json_decode($jsonContent, true);
      if(json_last_error() !== JSON_ERROR_NONE) {
        throw new Exception("Json decoding error: ". json_last_error_msg());
      }

      return $arrayContent;

    } catch (Exception $e) {
      echo "Error: " . $e->getMessage() . PHP_EOL;
    }
  }
}