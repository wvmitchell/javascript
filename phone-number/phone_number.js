function Phone(rawNumber) {

  var digits =  cleanNumber(rawNumber);

  this.number = function(){
    return digits
  }

  this.areaCode = function(){
    return digits.slice(0,3)
  }

  this.toString = function(){
    var phone_string = "(";
    phone_string += this.areaCode();
    phone_string += ") ";
    phone_string += digits.slice(3,6);
    phone_string += "-";
    phone_string += digits.slice(6,10);
    return phone_string;
  }

  function cleanNumber(rawNumber){
    var digits = rawNumber.replace(/\D/g, "");
    digits = removeUSCountryCode(digits);
    digits = replaceInvalidNumber(digits);
    return digits;
  }

  function removeUSCountryCode(number){
    if(number[0] == 1 && number.length == 11){
      return number.substring(1)
    } else {
      return number
    }
  }

  function replaceInvalidNumber(number){
    if(!valid(number)){
      return '0000000000';
    } else {
      return number
    }
  }

  function valid(number){
    return validLength(number) && validCountryCode(number);
  }

  function validLength(number){
    return number.length <= 11 && number.length > 9
  }

  function validCountryCode(number){
    return !hasCountryCode(number) || number[0] == 1
  }

  function hasCountryCode(number){
    return number.length == 11;
  }

}

module.exports = Phone;
