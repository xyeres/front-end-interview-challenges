/**
 * In JavaScript `this` is the object that owns the code that references this
 */

console.log(this) // <---- this (outside of strict mode) is the window object
console.log(this === window) // true

let michael = {
  age: 32,
}

function f(x, y) {
  return this.age + x + y;
}

const michaelAge = f.bind(michael, 3, 7)

console.log(michaelAge())
console.log(f.call(michael, 2, 3))
console.log(f.apply(michael, [6, 3]))

this.a = 999;

let arrowFunctionExample = {
  a: 54,
  arrow: () => this.a,
  func: function Dec() {
    return this.a
  }
}

// Arrow functions are boudn to the surrounding lexical scope where they are 
// executed, so this arrow function's this is set to the global window context
console.log(arrowFunctionExample.arrow())

// where as if it were ran inside the object, then the object would be the context.

class Square {
  constructor(w, h, cb) {
    this.w = w;
    this.h = h;
    this.callback = cb;
  }
  functionTest = () => console.log('call to this.h from arrow', this.h)
  
};

function regFunc() {
  console.log('call to this.h from func declaration', this.h)
}
const bigSquare = new Square(999999, 999999, null);

const mySquare = new Square(100, 200, regFunc.bind(bigSquare));

console.log(mySquare.callback());
console.log(mySquare.functionTest());