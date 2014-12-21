var Etl = function(toTransform) {
  var transformed = {};
  for(var key in toTransform) {
    var values = toTransform[key];
    values.forEach(function(element, index, array) {
      transformed[element.toLowerCase()] = parseInt(key);
    });
  }
  return transformed;
}

module.exports = Etl;
