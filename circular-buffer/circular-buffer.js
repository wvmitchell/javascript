function CircularBuffer(size) {
  this.buffer = [];
  this.maxSize = size;
}

function bufferEmptyException() {
  return 'buffer is empty'
}

function bufferFullException() {
  return 'buffer is full'
}

CircularBuffer.prototype.read = function() {
  if(this.buffer.length > 0) {
    return this.buffer.shift();
  } else {
    throw bufferEmptyException();
  }
}

CircularBuffer.prototype.write = function(value) {
  if(this.buffer.length >= this.maxSize) {
    throw bufferFullException();
  } else if(value) {
    this.buffer.push(value);
  }
}

CircularBuffer.prototype.forceWrite = function(value) {
  this.buffer.push(value);
  this.buffer.shift();
}

CircularBuffer.prototype.clear = function() {
  this.buffer = [];
}

module.exports = {
  circularBuffer: function(size) {
    return new CircularBuffer(size);
  },

  bufferEmptyException: function() {
    bufferEmptyException();
  },

  bufferFullException: function() {
    bufferFullException();
  }
}
