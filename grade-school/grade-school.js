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

  this.grade = function(grade){
    return roster[grade].sort();
  }

}

module.exports = School;
