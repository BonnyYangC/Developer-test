<?php

namespace Tests;

class ProgressReportTest extends Base
{
  
  public function testOutput()
  {
    // Simulated user input
    $input = "student1\n2\n";

    // Execute the script and capture output
    $output = $this->runCliScript($this->scriptPath, $input);

    // Assert the output contains the expected result
    $this->assertCommonOutput($output);
    $this->assertStringContainsString("Tony Stark has completed Numeracy assessment 3 times in total.", $output);
    $this->assertStringContainsString("Date: 16th December 2021, Raw Score: 15 out of 16", $output);
    $this->assertStringContainsString("Date: 16th December 2020, Raw Score: 10 out of 16", $output);
    $this->assertStringContainsString("Date: 16th December 2019, Raw Score: 6 out of 16", $output);
    $this->assertStringContainsString("Tony Stark got 9 more correct in the recent completed assessment than the oldest", $output);
  }
}