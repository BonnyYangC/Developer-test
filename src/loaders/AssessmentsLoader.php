<?php

namespace App\Loaders;

use App\Models\Assessment;
use Exception;

class AssessmentsLoader
{
  private string $queryId = '';
  private string $jsonFile = 'assessments.json';

  public static function create()
  {
    return new AssessmentsLoader();
  }

  public function for(string $id): self
  {
    $this->queryId = $id;
    return $this;
  }

  public function load()
  {
    try {
      $jsonContent = file_get_contents(__DIR__.'/../../data/' . $this->jsonFile);
      
      if($jsonContent === false) {
        throw new Exception("Could not read json file.");
      }

      $arrayContent = json_decode($jsonContent, true);
      if(json_last_error() !== JSON_ERROR_NONE) {
        throw new Exception("Json decoding error: ". json_last_error_msg());
      }

      $objects = array_map(function ($content) {
        return Assessment::fromArray($content);
      }, $arrayContent);

      // Filter out assessments by studentId
      return $this->queryId ? current(array_filter($objects, function (Assessment $object) {
        return $object->id === $this->queryId;
      })) : $objects;

    } catch (Exception $e) {
      echo "Error: " . $e->getMessage() . PHP_EOL;
    }
  }
}