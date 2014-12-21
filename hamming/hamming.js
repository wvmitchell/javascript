var Hamming = {

  compute : function(strand1, strand2) {
    var length = strand1.length;
    var distance = 0;
    for(var i = 0; i < length; i+=1){
      if(strand1[i] !== strand2[i]){
        distance += 1;
      }
    }
    return distance;
  }

}

module.exports = Hamming;
