/**
 * I highly recommend you take a look at additional 
 * material at this link:
 * https://javascript.info/callbacks
 * 
 * An excellent explanation of traditional callback style async code
 * and the pitfalls of 'callback hell'
 * 
 * They use closer to real world examples that really helpy bring 
 * the pieces together if you're still struggling with callbacks
 *  
 */

/** Problem statement
  Study and run the code given below. 
  It will give the error Cannot read property 'text' of undefined. 
  Your task is to modify the code so that it displays the correct output, 
  Complete Code Example, when run. 

  Input#
  Sample code

  Output#
  The correct output: Complete Code Example
*/

const getTodo = () => {
  setTimeout(() => {
    return { text: 'Complete Code Example' }
  }, 2000)
}
function display() {
  const todo = getTodo()
  console.log(todo.text)
}

display()

// A solution:
const getTodo = (callback) => {
  setTimeout(() => {
    callback(null, { text: 'Complete Code Example' })
  }, 2000)
}
function display() {
  getTodo(function (err, obj) {
    if (err) {
      // handle err
    } else {
      console.log(obj.text)
    }
  })
}