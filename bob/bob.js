var Bob = function() {

  this.hey = function(statement){
    if(silence(statement)){
      return 'Fine. Be that way!';
    } else if(shouting(statement)){
      return 'Woah, chill out!';
    } else if(question(statement)){
      return 'Sure.';
    } else {
      return 'Whatever.';
    }
  };

  var silence = function(text){
    return text.trim() == "";
  }

  var shouting = function(text){
    return text.toUpperCase() == text;
  }

  var question = function(text){
    return text.charAt(text.length-1) == '?'
  }
};

module.exports = Bob;

