<?php

namespace App;

use DateTime;

class Utilities
{
  public static function formatDataTime(DateTime $dateTime, bool $withTime = false): string
  {
    $day = $dateTime->format('j'); // Get the day with suffix

    // Format the date
    $dayWithSuffix = self::addOrdinalSuffix($day);
    $date = $withTime ? $dateTime->format(' F Y h:i A') : $dateTime->format(' F Y');
    return $dayWithSuffix . $date;
  }

  // Function to add ordinal suffix to a day
  private static function addOrdinalSuffix($day) {
    if (!in_array(($day % 100), [11, 12, 13])) {
      switch ($day % 10) {
        case 1: return $day . 'st';
        case 2: return $day . 'nd';
        case 3: return $day . 'rd';
      }
    }
    return $day . 'th';
  }
}