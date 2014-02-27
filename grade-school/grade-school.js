function School(){

  var roster = {}

  this.roster = function(){
    return roster;
  }

  this.add = function(name, grade){
    if(roster[grade] != null){
      roster[grade].push(name);
      roster[grade] = roster[grade].sort();
    } else {
      roster[grade] = [name];
    }
  }

  this.grade = function(grade){
    if(roster[grade] != null){
      return roster[grade];
    } else {
      return [];
    }
  }

}

module.exports = School;
