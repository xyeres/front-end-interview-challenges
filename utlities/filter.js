// MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

Array.prototype.myFilter = function filter(cb, thisArg) {
  var result = [];

  for (let i = 0; i < this.length; i++) {
    let filterResult;

    if (thisArg) filterResult = cb.call(thisArg, this[i], i, this);
    else filterResult = cb(this[i], i, this);

    if (filterResult) {
      result.push(this[i]);
    }
  }

  return result;
};

let r = [1, 3, 4, 3, 2, 4, 5].filter(compair);
let s = [1, 3, 4, 3, 2, 4, 5].myFilter(compair);

console.log(r);
console.log(s);

function compair(val) {
  if (val > 3) {
    return true;
  }
}
