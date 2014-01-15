var DNA = function(sequence){

  this.toRNA = function(){
    return sequence.replace(/T/g, 'U');
  }

}

module.exports = DNA;
