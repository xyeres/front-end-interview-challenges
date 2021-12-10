"use strict";
// Problem Statement#
// Implement a function findBin(n), which will generate binary numbers from 11 to nn in the form of a string using a queue.An illustration is also provided for your understanding.

// Input#
// A positive integer nn

// Output#
// Returns binary numbers in the form of strings from 1 up to n

// Sample Input#
// n = 3
// Sample Output#
// result = ["1", "10", "11"]

// O(n)

console.log(findBin(5))

function findBin(number) {
  let result = [];
  let queue = [];
  let s1, s2 = '';
  queue.push("1")

  for (let i = 0; i < number; i++) {
    result.push(queue.shift());

    s1 = result[i] + '0' // first iteration: 10 
    s2 = result[i] + '1' // first iteration: 11

    queue.push(s1)
    queue.push(s2)
  }
  return result;
}




