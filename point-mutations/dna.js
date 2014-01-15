var DNA = function(sequence){

  var sequenceDifference = function(first, second){
    var count = 0, length = Math.min(first.length, second.length)
    for(var i=0; i<length; i++){
      if(first[i] != second[i]){
        count++;
      }
    }
    return count;
  }

  this.hammingDistance = function(alternative_sequence){
    return sequenceDifference(sequence, alternative_sequence);
  }

}

module.exports = DNA;
