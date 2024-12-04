<?php

namespace Tests;

use PHPUnit\Framework\TestCase;

class AppTest extends BaseTest //TestCase
{
  
  public function testEmptyInput()
  {
    // Simulated user input
    $input = "\n\n";

    // Execute the script and capture output
    $output = $this->runCliScript($this->scriptPath, $input);

    // Assert the output contains the expected result
    $this->assertCommonOutput($output);
    $this->assertStringContainsString("Usage: must input student id and report id!", $output);
  }

  public function testNonNumericReport()
  {
    // Simulated user input
    $input = "student1\nreport\n";

    // Execute the script and capture output
    $output = $this->runCliScript($this->scriptPath, $input);

    // Assert the output contains the expected result
    $this->assertCommonOutput($output);
    $this->assertStringContainsString("Error: report inputs must be numbers in [1, 2, 3]!", $output);
  }

  public function testUnsupportedReport()
  {
    // Simulated user input
    $input = "student1\n4\n";

    // Execute the script and capture output
    $output = $this->runCliScript($this->scriptPath, $input);

    // Assert the output contains the expected result
    $this->assertCommonOutput($output);
    $this->assertStringContainsString("Error: report inputs must be numbers in [1, 2, 3]!", $output);
  }

}