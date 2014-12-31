var specialCase = function(integer) {
  return 900 <= integer && integer < 1000 ||
    400 <= integer && integer < 500 ||
    90 <= integer && integer < 100 ||
    40 <= integer && integer < 50 ||
    integer === 9 || integer === 4
}

var specialNumeral = function(integer) {
  var numeralPair = []
  if(integer >= 900) {
    numeralPair.push('CM', 900)
  } else if(integer >= 400) {
    numeralPair.push('CD', 400)
  } else if(integer >= 90) {
    numeralPair.push('XC', 90)
  } else if(integer >= 40) {
    numeralPair.push('XL', 40)
  } else if(integer === 9) {
    numeralPair.push('IX', 9)
  } else {
    numeralPair.push('IV', 4)
  }
  return numeralPair
}

var toRoman = function(integer){
  var numeral = '',
      remaining = integer;

  while(remaining > 0) {
    if(specialCase(remaining)) {
      var special = specialNumeral(remaining);
      numeral += special[0];
      remaining -= special[1];
    } else if(remaining >= 1000) {
      numeral += 'M';
      remaining -= 1000;
    } else if(remaining >= 500) {
      numeral += 'D';
      remaining -= 500;
    } else if(remaining >= 100) {
      numeral += 'C';
      remaining -= 100;
    } else if(remaining >= 50) {
      numeral += 'L';
      remaining -= 50;
    } else if(remaining >= 10) {
      numeral += 'X';
      remaining -= 10;
    } else if(remaining >= 5) {
      numeral += 'V';
      remaining -= 5;
    } else {
      numeral += 'I';
      remaining -= 1;
    }
  }
  return numeral;
}

module.exports = toRoman;
