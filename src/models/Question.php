<?php

namespace App\Models;

class Option
{
  public string $id;
  public string $label;
  public string $value;
  
  public function __construct(string $id, string $label, string $value)
  {
    $this->id = $id;
    $this->label = $label;
    $this->value = $value;
  }

  public static function fromArray(array $data): self
  {
    return new Option(
      $data['id'], $data['label'], $data['value']
    );
  }
}

class Config
{
  /** @var Option[] */
  public array $options;
  public string $key;
  public string $hint;
  
  public function __construct(string $key, string $hint, array $options)
  {
    $this->key = $key;
    $this->hint = $hint;
    $this->options = $options;
  }

  public static function fromArray(array $data): self
  {
    return new Config(
      $data['key'], $data['hint'],
      array_map(function($option) {
        return Option::fromArray($option);
      }, $data['options'])
    );
  }
}

class Question
{
  public string $id;
  public string $stem;
  public string $type;
  public string $strand;
  public Config $config;
  
  public function __construct(array $data, Config $config)
  {
    $this->id = $data['id'];
    $this->strand = $data['strand'];
    $this->stem = $data['stem'];
    $this->config = $config;
  }

  public static function fromArray(array $data): self
  {
    return new Question(
      $data,
      Config::fromArray($data['config'])
    );
  }
}