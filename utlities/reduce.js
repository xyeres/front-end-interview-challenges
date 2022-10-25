// MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce


Array.prototype.myReduce = function (cb, initialValue) {

  var i = 0;

  if (!initialValue) {
    initialValue = this[0]
    i = 1
  }

  for (; i < this.length; i++) {
    initialValue = cb(initialValue, this[i], i, this);
  }
  return initialValue
};

let total = x.myReduce((cur, next) => (cur += next),100)
console.log(total)