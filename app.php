<?php

require_once __DIR__ . '/vendor/autoload.php';

use App\Greeting;
use App\ReportGenerator;

echo "Please enter the following\n";

// Ask for student id
echo "Student ID: ";
$studentId = trim(fgets(STDIN));

// Ask for Report to generate
echo "Report to generate (1 for Diagnostic, 2 for Progress, 3 for Feedback): ";
$reportId = trim(fgets(STDIN));

// Validate parameters
if (!$studentId || !$reportId) 
{
  echo "Usage: must input student id and report id!" . PHP_EOL;
  exit(1);
}

// Validate report type
if (!is_numeric($reportId) || !(3 >= $reportId && 1 <= $reportId))
{
  echo "Error: report inputs must be numbers in [1, 2, 3]!\n";
  exit(1);
}

// Start report generator
ReportGenerator::create($studentId, $reportId)->handle();
