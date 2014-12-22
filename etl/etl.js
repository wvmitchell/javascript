var Etl = function(toTransform) {
  var transformed = {};
  for(var property in toTransform) {
    var values = toTransform[property];
    values.forEach(function(element, index, array) {
      transformed[element.toLowerCase()] = parseInt(property, 10);
    });
  }
  return transformed;
}

module.exports = Etl;
