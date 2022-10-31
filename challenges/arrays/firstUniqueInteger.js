// Problem Statement#
// Implement a function, findFirstUnique(arr), which takes an array as input and returns the first unique integer in the array.

// Note: The function should return null if no unique number is found.

// Input#
// An array of integers

// Output#
// The first unique element in the array

// Sample Input#
// [9,2,3,2,6,6]
// Sample Output#
// 9

function findFirstUnique(arr) {
  // Using map
  // map preserves order of elements added, so we can loop back through it at the end and return the first placed original item

  var seen = new Map();

  arr.forEach((n) => {
    if (seen.has(n)) {
      seen.set(n, 0);
    } else {
      seen.set(n, 1);
    }
  });

  // loop over map to return first element
  for (let [key, val] of seen) {
    if (val == 1) {
      return key;
    }
  }
  return -1;
}

console.log(findFirstUnique([9, 2, 3, 2, 6, 6])); // expect 9
console.log(findFirstUnique([4, 5, 1, 2, 0, 4])); // expect 5
