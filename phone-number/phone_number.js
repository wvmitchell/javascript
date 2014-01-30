function Phone(raw_number) {

  this.number = function(){
    var digits = raw_number.replace(/\D/g, "");
    digits = remove_us_country_code(digits);
    digits = remove_invalid_numbers(digits);
    return digits;
  }

  this.areaCode = function(){
    return this.number().slice(0,3)
  }

  this.toString = function(){
    var phone_string = "(";
    phone_string += this.areaCode();
    phone_string += ") ";
    phone_string += this.number().slice(3,6);
    phone_string += "-";
    phone_string += this.number().slice(6,10);
    return phone_string;
  }

  function remove_us_country_code(number){
    if(number[0] == 1 && number.length == 11){
      return number.substring(1)
    } else {
      return number
    }
  }

  function remove_invalid_numbers(number){
    if(!valid(number)){
      return '0000000000';
    } else {
      return number
    }
  }

  function valid(number){
    return valid_length(number) && valid_country_code(number);
  }

  function valid_length(number){
    return number.length <= 11 && number.length > 9
  }

  function valid_country_code(number){
    return !has_country_code(number) || number[0] == 1
  }

  function has_country_code(number){
    return number.length == 11;
  }

}

module.exports = Phone;
