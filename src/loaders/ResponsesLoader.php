<?php

namespace App\Loaders;

use App\models\ResponseDetail;
use Exception;

class ResponsesLoader
{
  private array $arrayContent;

  private string $queryId;
  private string $jsonFile = 'student-responses.json';

  public static function create()
  {
    return new ResponsesLoader();
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

      $responseObjects = array_map(function ($response) {
        return ResponseDetail::fromArray($response);
      }, $arrayContent);

      // Filter out student completed assessment responses
      $filteredObjects = array_filter($responseObjects, function (ResponseDetail $response) {
        return $response->student->id === $this->queryId && $response->completed !== '';
      });
      
      // Sort in Descending Order by completed
      usort($filteredObjects, function($a, $b) {
        return $b->completed <=> $a->completed;
      });

      // Return latest one
      return $filteredObjects;
    } catch (Exception $e) {
      echo "Error: " . $e->getMessage() . PHP_EOL;
    }
  }
}