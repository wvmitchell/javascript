var Song = {
  verse : function(num){
      var verse = "I know an old lady who swallowed a " + this.animals[num-1] + ".\n";
      if(num === 8) {
        verse += "She's dead, of course!\n";
      } else {
        verse += this.animalLines[num-1];
        verse += this.explainationLines(num-1);
        verse += "I don't know why she swallowed the fly. Perhaps she'll die.\n";
      }
      return verse;
  },

  verses : function(start, finish) {
    var song = "";
    for(var i = start; i < finish + 1; i+=1) {
      song += this.verse(i);
      song += "\n";
    }
    return song;
  },

  sing : function() {
    return this.verses(1,8)
  },

  animals : [
    "fly", "spider", "bird", "cat", "dog", "goat", "cow", "horse"
  ],

  animalLines : [
    "",
    "It wriggled and jiggled and tickled inside her.\n",
    "How absurd to swallow a bird!\n",
    "Imagine that, to swallow a cat!\n",
    "What a hog, to swallow a dog!\n",
    "Just opened her throat and swallowed a goat!\n",
    "I don't know how she swallowed a cow!\n"
  ],

  explainationLines : function(num) {
    var explaination = ''
    for(var i = num; i > 0; i -= 1) {
      explaination += "She swallowed the "
      explaination += this.animals[i]
      explaination += " to catch the "
      if(i === 2) {
        explaination += "spider that wriggled and jiggled and tickled inside her.\n"
      } else {
        explaination += this.animals[i-1] + ".\n"
      }
    }
    return explaination
  }
}

module.exports = Song;
