<?php

namespace App;

use App\Reports\DiagnosticReport;
use App\Reports\FeedbackReport;
use App\Reports\ProgressReport;

class ReportFactory 
{
  public static function create(string $studentId, int $type) 
  {
    switch ($type) {
        case 1:
            return (new DiagnosticReport())->for($studentId);
        case 2:
            return (new ProgressReport())->for($studentId);
        case 3:
            return (new FeedbackReport())->for($studentId);
        default:
            throw new \Exception("Invalid report type.");
    }
  }
}