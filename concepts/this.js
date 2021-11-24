/**
 * In JavaScript `this` is the object that owns the code that references this
 */

console.log(this) // <---- this (outside of strict mode) is the window object
console.log(this === window) // true


var myObject = {}
myObject.aMethod = function() {
  console.log(this)
}

myObject.aMethod();

const nav = document.querySelector('.nav')

function navHander() {
  var that = this;
  console.log(that)
  setTimeout(function() {
    console.log('this inside timeout', that)
  }, 1000)
}
nav.addEventListener('click', navHander, false)

var links = document.querySelectorAll('nav li')
for (var i = 0; i<links.length; i++) {
  (function() {
    console.log(this)
  }).call(links[i])
}