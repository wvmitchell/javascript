var Anagram = function(subject){

  var organize_letters = function(word){
    return word.toLowerCase().split('').sort().join()
  }

  var same_letters = function(word, other_word){
    return organize_letters(word) == organize_letters(other_word)
  }

  var same_word = function(word, other_word){
    return word == other_word
  }

  var anagram = function(word, other_word){
    return same_letters(word, other_word) && !same_word(word, other_word)
  }

  this.match = function(potential_anagrams){
    matches = []
    for(var i=0; i<potential_anagrams.length; i++){
      if(anagram(subject, potential_anagrams[i])){
        matches.push(potential_anagrams[i])
      }
    }
    return matches
  }

}

module.exports = Anagram;
