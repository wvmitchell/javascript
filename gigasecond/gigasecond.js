function Gigasecond(date) {
  this.birthday = date;
}

Gigasecond.prototype.date = function() {
  var anniversary = new Date(Date.parse(this.birthday) + Math.pow(10,12))
  anniversary.setHours(0);
  anniversary.setMinutes(0);
  anniversary.setSeconds(0);
  return anniversary;
}

module.exports = Gigasecond;
