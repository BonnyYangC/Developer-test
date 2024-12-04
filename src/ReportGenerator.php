<?php

namespace App;

class ReportGenerator 
{
  private $studentId;
  private $reportId;

  private function __construct(string $studentId, int $reportId) 
  {
    $this->studentId = $studentId;
    $this->reportId = $reportId;
  }

  public static function create(string $studentId, int $reportId): ReportGenerator  
  {
    return new ReportGenerator($studentId, $reportId);
  }

  public function handle(): string
  {
    return ReportFactory::create($this->studentId, $this->reportId)->handle();
  }
}