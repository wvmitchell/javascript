var DNA = function(sequence){

  var nucleotides = ['A', 'T', 'C', 'G', 'U'];

  var valid_nucleotide = function(nucleotide){
    return (nucleotides.indexOf(nucleotide) > -1)
  }

  this.count = function(nucleotide){
    if(!valid_nucleotide(nucleotide)){
      throw "Invalid Nucleotide"
    }
    var count = 0;
    for(var i=0; i<sequence.length; i++){
      if(sequence[i] == nucleotide){
        count++;
      }
    }
    return count;
  }
  
  this.nucleotideCounts = {
    A:this.count('A'), 
    T:this.count('T'), 
    C:this.count('C'), 
    G:this.count('G')
  }

}

module.exports = DNA;
