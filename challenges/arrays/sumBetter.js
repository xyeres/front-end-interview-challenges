/**
 * Variation on the challenge from Educative.io
 * Problem Statement #
  In this problem, you have to implement the findSum(arr, value) function, which takes an array 
  arr, a number and value as input and returns an array of two numbers that add up to value.

  Note: In case there is more than one pair in the array containing numbers that add up to value, 
  you are required to return only one such pair. If no such pair found then simply return false.

  Input #
  An array and a number value

  Output #
  An array with two integers a and b ([a,b]) that add up to value

  Sample Input #
  arr = [1,21,3,14,5,60,7,6]
  value = 81
  Sample Output #
  arr = [21,60]
 */

function findSum(arr, value) {
  // my initial thought is to find the difference between the value and the current item, 
  // if there is a 'match' that fills the 2nd half, we would have to keep track of items with hash
  let seen = {}
  for (let i = 0; i < arr.length; i++) {
    let difference = value - arr[i]
    let currElement = arr[i]
    if (seen[currElement] !== undefined) {
      return [currElement, seen[currElement]]
    } else {
      seen[difference] = arr[i]
    }
  }
}

console.log(findSum([1, 2, 3], 5))

