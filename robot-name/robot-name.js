function Robot(){

  this.name = 'ab' + Math.floor(Math.random()*1000)

  this.reset = function(){
    this.name = 'ab' + Math.floor(Math.random()*1000)
  }

}

module.exports = Robot;
