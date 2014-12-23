function Triangle(side1, side2, side3) {
  this.sides = [side1, side2, side3].sort(function(a,b) {
    if(a < b) {
      return -1
    } else if(a > b) {
      return 1;
    }
  });
}

Triangle.prototype.kind = function() {
  if(this.illegal()){
    throw "Illegal Triangle"
  } else if(this.equilateral()) {
    return "equilateral"
  } else if(this.isosceles()) {
    return "isosceles"
  } else if(this.scalene()) {
    return "scalene"
  }
}

Triangle.prototype.equilateral = function() {
  return this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2]
}

Triangle.prototype.isosceles = function() {
  return this.sides[1] === this.sides[2]
}

Triangle.prototype.scalene = function() {
  var uniqElements = [];
  for(var i = 0; i < 3; i += 1) {
    if(uniqElements.indexOf(this.sides[i]) === -1) {
      uniqElements.push(this.sides[i]);
    }
  }
  return uniqElements.length === 3;
}

Triangle.prototype.illegal = function() {
  return this.illegalSides() || this.violatesInequality();
}

Triangle.prototype.illegalSides = function() {
  return !this.sides.every(function(elem, index, arr) {
    return elem > 0;
  });
}

Triangle.prototype.violatesInequality = function() {
  return this.sides[0] + this.sides[1] <= this.sides[2]
}

module.exports = Triangle;
