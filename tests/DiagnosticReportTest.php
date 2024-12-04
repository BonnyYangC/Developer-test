<?php

namespace Tests;

class DiagnosticReportTest extends BaseTest
{
  
  public function testOutput()
  {
    // Simulated user input
    $input = "student1\n1\n";

    // Execute the script and capture output
    $output = $this->runCliScript($this->scriptPath, $input);

    // Assert the output contains the expected result
    $this->assertCommonOutput($output);
    $this->assertStringContainsString("Tony Stark recently completed Numeracy assessment on 16th December 2021 10:46 AM", $output);
    $this->assertStringContainsString("He got 15 questions right out of 16.", $output);
    $this->assertStringContainsString("Number and Algebra: 5 out of 5 correct", $output);
    $this->assertStringContainsString("Measurement and Geometry: 7 out of 7 correct", $output);
    $this->assertStringContainsString("Statistics and Probability: 3 out of 4 correct", $output);
  }
}