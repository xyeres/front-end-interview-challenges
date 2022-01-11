/**
 * Problem statement#
    Write a wrapper function currying which accepts a function, say func, and returns the curried version of func.

    Input#
    Function to be transformed to the currying function

    Output#
    Curried Function

    Sample input#
    function multiply(a, b, c) {
        return a*b*c;
    }
    Sample output#
    let curried = currying(multiply);
    curried(2)(3)(4) //24
    curried(2,3)(4) //24
 */


function currying(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func(...args)
    } else {
      return function (...next) {
        return curried(...args, ...next)
      }
    }
  }
}

function multiply(a, b, c) {
  return a * b * c;
}

let curried = currying(multiply);

console.log(curried(2)(3)(4)) //24

let curriedFixedVales = curried(2, 3)

console.log(curriedFixedVales(2)) //12
