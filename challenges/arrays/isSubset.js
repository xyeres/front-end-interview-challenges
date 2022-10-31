// Problem Statement#
// Implement the isSubset(list1,list2) function which will take two arrays as input and check whether one array is the subset of the other.

// Note: The input arrays do not contain duplicate values.

// Input#
// Two arrays of integers.

// Output#
// true if list2 is a subset of list1.

// Sample Input#
var list1 = [9, 4, 7, 1, -2, 6, 5];
var list2 = [7, 1, -2];

// Sample Output#
// true

// Map solution that does not take order into consideration

function isSubsetMap(list1, list2) {
  if (list2.length > list1.length) {
    return false;
  }

  var seen = new Map();

  for (let [i, val] of list1.entries()) {
    seen.set(val, i);
  }

  for (let val of list2) {
    if (!seen.has(val)) {
      return false;
    }
  }

  return true;
}

console.log(isSubsetMap(list1, list2));

// Solution that checks which list is short and
// uses sliding window to check if a subset is found..
// more complicated than problem statement requires
function isSubset(list1, list2) {
  // which is smaller
  // grab sliding window
  // subtract window from smaller array
  // if 0 return true
  var short;
  var long;

  if (list1.length < list2.length) {
    short = list1;
    long = list2;
  } else {
    long = list1;
    short = list2;
  }

  // iterating through arr
  let window = [];

  for (let i = 0; i < long.length; i++) {
    window.push(long[i]);

    let matchCount = 0;

    if (window.length >= short.length) {
      for (let j = 0; j < window.length; j++) {
        if (short[j] === window[j]) {
          matchCount++;
          continue;
        } else {
          break;
        }
      }
      if (matchCount === short.length) {
        return true;
      }
      window.shift();
    }
  }
  return false;
}

console.log(isSubset(list1, list2));
