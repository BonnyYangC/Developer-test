<?php

namespace Tests;

use App\ReportFactory;
use App\reports\{DiagnosticReport, ProgressReport, FeedbackReport};
use PHPUnit\Framework\TestCase;

class ReportFactoryTest extends TestCase {
  public function testInstanceOfDiagnosticReport() {
    $report = ReportFactory::create('student1', 1);

    $this->assertInstanceOf(DiagnosticReport::class, $report);
  }

  public function testInstanceOfProgressReport() {
    $report = ReportFactory::create('student1', 2);

    $this->assertInstanceOf(ProgressReport::class, $report);
  }

  public function testInstanceOfFeedbackReport() {
    $report = ReportFactory::create('student1', 3);

    $this->assertInstanceOf(FeedbackReport::class, $report);
  }
}