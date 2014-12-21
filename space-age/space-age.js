var SpaceAge = function(seconds) {
  this.seconds = seconds;
}

SpaceAge.prototype.earthSeconds = 31557600;

SpaceAge.prototype.planetYears = {
  mercury : 0.2408467,
  venus : 0.61519726,
  earth : 1,
  mars : 1.8808158,
  jupiter : 11.862615,
  saturn : 29.447498,
  uranus : 84.016846,
  neptune : 164.79132
}

SpaceAge.prototype.calculate = function(planet) {
  return parseFloat((this.seconds / this.planetYears[planet] / this.earthSeconds).toFixed(2));
}

SpaceAge.prototype.onMercury = function() {
  return this.calculate('mercury');
}

SpaceAge.prototype.onVenus = function() {
  return this.calculate('venus');
}

SpaceAge.prototype.onEarth = function() {
  return this.calculate('earth');
}

SpaceAge.prototype.onMars = function() {
  return this.calculate('mars');
}

SpaceAge.prototype.onJupiter = function() {
  return this.calculate('jupiter');
}

SpaceAge.prototype.onSaturn = function() {
  return this.calculate('saturn');
}

SpaceAge.prototype.onUranus = function() {
  return this.calculate('uranus');
}

SpaceAge.prototype.onNeptune = function() {
  return this.calculate('neptune');
}

module.exports = SpaceAge;
