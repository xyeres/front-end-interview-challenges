// Implement Array.prototype.slice() from scratch

Array.prototype.slice = function(start=0, end=this.length) {
  let temp = []
  for (let i = start; i < end; i++) {
    temp.push(this[i]);
  }
  return temp;
}

let a1 = [1,2,3,4,5,6]
let s1 = a1.slice(2,4);

console.log('s1', s1)