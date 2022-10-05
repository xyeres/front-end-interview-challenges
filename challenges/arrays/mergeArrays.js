// Implement a function that merges two sorted arrays into another sorted array.

// For example, if input is: 
/**
 *
 *  arr1 = [1,3,4,5]
 *  arr2 = [2,6,7,8]
 * 
 * then output should be: 
 * arr = [1,2,3,4,5,6,7,8]
 */


// More of a classic Merge Sort Solution
// O(n+m) because we have to loop through both arrays

function mergeArrays(arr1, arr2) {
  // two pointers, left and right that move through each array 
  // check to see if left is smaller than right, if so, push it to result, 
  // else push it to right

  let left = 0, right = 0;
  let result = [];

  while (left < arr1.length && right < arr2.length) {
    if (arr1[left] < arr2[right]) {
      result.push(arr1[left])
      left++;
    } else {
      result.push(arr2[right])
      right++
    }
  }
  // in the end, check to see if there is remaining elements in either array, 
  // if so, slice those out using corrisponding pointer and concat to result

  let arr1Remaining = arr1.slice(left)
  let arr2Remaining = arr2.slice(right)

  return result.concat(arr1Remaining).concat(arr2Remaining)
}

console.log(mergeArrays([1, 3, 4, 5, 899], [2, 6, 7, 8, 700]))




// Spread Operator Solution: 
// O(nlogn) since we are using the sort function
function mergeArraysSpread(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b)
}

console.log(mergeArraysSpread([1, 3, 4, 5], [2, 6, 7, 8]))

// Array.prototype.sort() converts elements to strings and sorts in descending order 
// by UTF-16 code unit values (lexicographical) so 50 will be considered greater than 300
// because 5 is greater than 3