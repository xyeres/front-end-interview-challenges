// Classic counter closure shows how closures
// create variable based references, not value based referneces

function makeCounter() {
  var count = 1;

  return function increment() {
    return count++;
  }
}

let hits = makeCounter();

console.log(hits.name)
console.log(hits())
console.log(hits())
console.log(hits())
console.log(hits())
console.log(hits())
