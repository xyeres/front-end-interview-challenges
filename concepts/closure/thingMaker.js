/**
 * 
 * A closure is the combination of a function and the lexical environment 
 * in which it was declared. 
 * 
 * A closure has access to the outher (enclosing) functions variable scope chain
 * even after the function has returned.
 * 
 */

function thingMaker(animalType) {
  let count = 0;

  return function() {
    count++;
    console.log(`Hello, i am a ${animalType}, I am the ${count} version of me.`)
  }
}

const bigRedDog = thingMaker('big red dog3333')
const smallWhiteDog = thingMaker('small teeny tiny doggie')

smallWhiteDog()
smallWhiteDog()
smallWhiteDog()
smallWhiteDog()
smallWhiteDog()
bigRedDog()

// Make add(a)(b) work
function add(a) {
  return function (b) {
    return a + b
  }
}

console.log(add(2)(5))


// A function doesn't have to return in order to be called a closure
// simply accessing variables outside of the immediate lexical scope
// create a closure: 

function myFunction(name) {
  let text = 'hello ' + name;
  function say() {
    console.log(text)
  }
  say()
}

myFunction('michael')