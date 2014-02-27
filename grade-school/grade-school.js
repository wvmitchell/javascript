function School(){

  var roster = {}

  this.roster = function(){
    return roster;
  }

  this.add = function(name, grade){
    roster[grade] = [name];
  }

}

module.exports = School;
