var DNA = function(sequence){

  var sequenceDifference = function(first, second){
    var count = 0, length = Math.min(first.length, second.length)
    for(length; length>0; length--){
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
