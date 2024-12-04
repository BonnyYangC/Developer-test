<?php

namespace Tests;

use App\ReportGenerator;
use PHPUnit\Framework\TestCase;

class ReportGeneratorTest extends TestCase {
  public function testInstanceOf() {
    $studentId = 'student1';
    $reportId = 1;
    $generator = ReportGenerator::create($studentId, $reportId);

    $this->assertInstanceOf(ReportGenerator::class, $generator);
  }
}