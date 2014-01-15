var Beer = {
  verse: function(num){

    function one_bottle_verse(){
      return "1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n";
    }

    function zero_bottle_verse(){
      return "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n";
    }

    function arbitrary_bottle_verse(bottles){
      return num + " bottles of beer on the wall, " + num + " bottles of beer.\nTake one down and pass it around, " + (num-1) + " bottles of beer on the wall.\n";
    }

    if(num == 1){
      return one_bottle_verse();
    } else if(num == 0){
      return zero_bottle_verse();
    } else {
      return arbitrary_bottle_verse(num);
    }
  },

  sing: function(start, finish){
    finish = typeof finish !== 'undefined' ? finish : 0
    var song = "";
    for(var i=start; i>finish; i--){
      song += (this.verse(i) + "\n")
    }
    song += this.verse(finish);
    return song;
  }
}


module.exports = Beer;
