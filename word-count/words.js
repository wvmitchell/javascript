var Words = function(text_string){

  var lower_case_words = function(){
    return text_string.toLowerCase().match(/(\w+)/g)
  }

  var find_word_counts = function(words){
    counts = {}
    for(var i=0; i<words.length; i++){
      if(typeof counts[words[i]] === 'undefined'){
        counts[words[i]] = 1
      } else {
        counts[words[i]] += 1
      }
    }
    return counts
  }

  var word_counts = function(){
    var words = lower_case_words()
    return find_word_counts(words)
  }

  this.count = word_counts()

};
module.exports = Words;
