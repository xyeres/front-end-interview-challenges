// var arr = [2, 2, 2, 1, 4]
// var weight = 6

// // given an array of integers and a target weight, return an array of 
// // indexes which add up to the target weight
// // if there is no match, return -1 
// // the same two indexes cannot be counted twice


function sumBetter(arr, weight) {
  var hashmap = {}
  // iterate through array, on the hashmap save the index as the value, and
  // the difference between the current index and the weight as the key,
  // if hashmap[difference] != undefined, return [i, hashmap[difference]]
  for (var i = 0, arrLen = arr.length; i < arrLen; i++) {
    var currentElement = arr[i];
    var difference = weight - currentElement;

    if (hashmap[currentElement] != undefined) {
      return [i, hashmap[currentElement]]
    } else {
      hashmap[difference] = i;
    }
    console.log(hashmap)
  }
  return -1
}

var result = sumBetter(arr, weight)
console.log('result: ', result)

/**
 * Variation on the challenge from Educative.io
 * Problem Statement #
  In this problem, you have to implement the findSum(arr, value) function, which takes an array arr, a number and value as input and returns an array of two numbers that add up to value.

  Note: In case there is more than one pair in the array containing numbers that add up to value, you are required to return only one such pair. If no such pair found then simply return false.

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
  const hashmap = {}
  for (let i in arr) {
    let element = arr[i];
    let difference = value - element;
    if (hashmap[element] != undefined) {
      return [arr[i], hashmap[element]];
    } else {
      hashmap[difference] = arr[i];
    }
  }
  return false;

}

console.log(findSum([1, 2, 3], 5))

