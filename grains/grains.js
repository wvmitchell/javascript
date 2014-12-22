function Grains() {}

Grains.prototype.square = function(number) {
  return Math.pow(2, number-1)
}

Grains.prototype.total = function() {
  return 18446744073709551615;
  /*
  var total = 0;
  for(var i = 1; i < 65; i+=1) {
    total += this.square(i)
  }
  return total;
  */
}

module.exports = Grains;
