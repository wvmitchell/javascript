function at(hour, min) {
  var minMillisecs = 1000 * 60;
  var hourMillisecs = minMillisecs * 60;
  var hour = ~~hour;
  var min = ~~min;

  var clock = {};
  clock.milliseconds = minMillisecs * min + hourMillisecs * hour

  clock.toString = function() {
    var date = new Date(this.milliseconds).toISOString().split('T')[1].split(':');
    return [date[0], date[1]].join(':');
  }

  clock.plus = function(min) {
    this.milliseconds += min * minMillisecs
    return this
  }

  clock.minus = function(min) {
    this.milliseconds -= min * minMillisecs
    return this
  }

  clock.equals = function(other) {
    return clock.toString() === other.toString()
  }

  return Object.create(clock);
}

exports.at = at;
