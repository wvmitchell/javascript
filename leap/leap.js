var Year = function(year) {
  function plainLeap(year) {
    return year % 4 === 0;
  }

  function regularCentury(year) {
    return year % 100 === 0 && year % 400 !== 0
  }

  function specialCentury(year) {
    return year % 400 === 0
  }

  if(regularCentury(year)){
    return false
  } else if(specialCentury(year)){
    return true
  } else if(plainLeap(year)){
    return true
  } else {
    return false
  }

}

module.exports = Year;
