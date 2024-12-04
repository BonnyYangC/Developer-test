<?php

namespace App;

class ReportGenerator {
  private $studentId;
  private $reportId;

  private function __construct($studentId, $reportId) {
    $this->studentId = $studentId;
    $this->reportId = $reportId;
  }

  public static function create($studentId, $reportId)
  {
    return new ReportGenerator($studentId, $reportId);
  }

  public function handle()
  {

  }
}