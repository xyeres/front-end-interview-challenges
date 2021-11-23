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

bigRedDog()
smallWhiteDog()
bigRedDog()
smallWhiteDog()
bigRedDog()
bigRedDog()
bigRedDog()
bigRedDog()
