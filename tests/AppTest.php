<?php

namespace Tests;

use PHPUnit\Framework\TestCase;
use App\Greeting;

class AppTest extends TestCase {
  public function testGreet() {
    $this->assertEquals("Hello, John!", Greeting::greet("John"));
    $this->assertEquals("Hello, Jane!", Greeting::greet("Jane"));
  }
}