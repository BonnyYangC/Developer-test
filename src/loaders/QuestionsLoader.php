<?php

namespace App\Loaders;

use App\Models\Question;
use Exception;

class QuestionsLoader
{
  private string $queryId;
  private string $jsonFile = 'questions.json';

  public static function create()
  {
    return new QuestionsLoader();
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

      return array_map(function ($content) {
        return Question::fromArray($content);
      }, $arrayContent);

    } catch (Exception $e) {
      echo "Error: " . $e->getMessage() . PHP_EOL;
    }
  }
}