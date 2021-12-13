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
  let sorted = []
  let leftIndex = 0, rightIndex = 0;

  while (leftIndex < arr1.length && rightIndex < arr2.length) {
    if (arr1[leftIndex] < arr2[rightIndex]) {
      sorted.push(arr1[leftIndex])
      leftIndex++;
    } else {
      sorted.push(arr2[rightIndex]);
      rightIndex++;
    }
  }

  let leftRemains = arr1.splice(leftIndex);
  let rightRemains = arr2.splice(rightIndex);
  
  let results = sorted.concat(leftRemains).concat(rightRemains)
  return results;
} 

console.log(mergeArrays([1, 3, 4, 5, 899], [2, 6, 7, 8,700]))




// Spread Operator Solution: 
// O(nlogn) sicne we are using the sort function
function mergeArraysSpread(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a-b)
}
console.log(mergeArraysSpread([1, 3, 4, 5], [2, 6, 7, 8]))