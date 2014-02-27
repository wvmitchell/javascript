function School(){

  var roster = {}

  this.roster = function(){
    return roster;
  }

  this.add = function(name, grade){
    if(roster[grade] != null){
      roster[grade].push(name);
    } else {
      roster[grade] = [name];
    }
  }

  this.grade = function(){
  }

}

module.exports = School;
