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

  return function inner() {
    count++;
    console.log(`Hello, i am a ${animalType}, I am the ${count} version of me.`)
  }
}

const bigRedDog = thingMaker('big red dog')
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