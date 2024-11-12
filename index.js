// expecting time to be a string in the format like '8:15' or '12:30'
const numberWords = [
  'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
  'eleven', 'twelve', 'thirteen', 'fourteen', 'quarter', 'sixteen', 'seventeen', 'eighteen', 'nineteen',
  'twenty', 'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five', 'twenty six',
  'twenty seven', 'twenty eight', 'twenty nine',
];

function convertTimeToWords(time) {
  if (time === '0:00') {
    return 'midnight';
  }

  if (time === '12:00') {
    return 'midday';
  }

  const [hoursStr, minutesStr] = time.split(':');
  const date = new Date();
  date.setHours(parseInt(hoursStr, 10));
  date.setMinutes(parseInt(minutesStr, 10));
  const hours = date.getHours() % 12;
  const minutes = date.getMinutes();

  if (minutes === 0) {
    return `${numberWords[hours]} o'clock`;
  }

  if (minutes === 30) {
    return `half past ${numberWords[hours]}`;
  }

  if (minutes < 30) {
    return `${numberWords[minutes]} past ${numberWords[hours]}`;
  }

  return `${numberWords[60 - minutes]} to ${numberWords[hours + 1]}`;
}

module.exports = { convertTimeToWords };
