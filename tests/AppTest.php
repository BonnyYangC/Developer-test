<?php

namespace Tests;
use PHPUnit\Framework\TestCase;

class AppTest extends TestCase
{
  // Path to the CLI script
  private $scriptPath;
  
  protected function setUp(): void
  {
    $this->scriptPath = __DIR__ . '/../app.php';
  }
  
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

  private function assertCommonOutput(string $output)
  {
    $this->assertStringContainsString("Please enter the following", $output);
    $this->assertStringContainsString("Student ID", $output);
    $this->assertStringContainsString("Report to generate (1 for Diagnostic, 2 for Progress, 3 for Feedback)", $output);
  }

  private function runCliScript(string $scriptPath, string $input): string
  {
    // Create a process to execute the script
    $descriptorspec = [
      0 => ['pipe', 'r'], // STDIN
      1 => ['pipe', 'w'], // STDOUT
      2 => ['pipe', 'w'], // STDERR
    ];

    // Start the process
    $process = proc_open("php $scriptPath", $descriptorspec, $pipes);

    if (!is_resource($process)) {
      throw new \RuntimeException("Failed to start process.");
    }

    // Write input to the process and close the input pipe
    fwrite($pipes[0], $input);
    fclose($pipes[0]);

    // Capture the output and close the output pipes
    $output = stream_get_contents($pipes[1]);
    fclose($pipes[1]);

    // Capture error output (if needed)
    $errorOutput = stream_get_contents($pipes[2]);
    fclose($pipes[2]);

    // Close the process and return the output
    proc_close($process);

    if ($errorOutput) {
      throw new \RuntimeException("Error during script execution: $errorOutput");
    }

    return $output;
  }
}