/**
 * 
    Implement a function called maxMin(arr), which will rearrange the elements of a sorted array so that the first position will have the largest number, the second will have the smallest, and the third will have the second-largest and so on. In other words, all the odd-numbered indices will have the largest numbers in the array in descending order, and the even-numbered indices will have the smallest numbers in ascending order.

    Note: The given array is sorted in ascending order.

    Input#
    A sorted array

    Output#
    An array with elements stored in max/min form

    Sample Input#
    arr = [1,2,3,4,5]
    Sample Output#
    arr = [5,1,4,2,3]} arr
*/

/**
 * 7 -> [0]
    * 1 -> [1]
 * 6 -> [2]
    * 2 -> [3]
 * 5 -> [4]
    * 3 -> [5]
 * 4 -> [6]
 */

// My First Attempt
function maxMinFirstAttempt(arr) {
  // Split list in half
  let mid = Math.floor(arr.length / 2)
  let leftHalf = arr.slice(0, mid)
  let rightHalf = arr.slice(mid)
  // make rightHalf odd indexs with skipping loop
  for (let i = 0, odd = 1; i < leftHalf.length; i++, odd += 2) {
    arr[odd] = leftHalf[i]
  }

  for (let i = (rightHalf.length - 1), even = 0; i > -1; i--, even += 2) {
    arr[even] = rightHalf[i];
  }

  return arr;
}


// Improved Solution
function maxMin(arr) {
  const result = []
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    result.push(arr[arr.length - (i + 1)])
    result.push(arr[i])
  }
  if (arr.length % 2) {
    result.push(arr[Math.floor(arr.length / 2)])
  }
  return result
}
console.log(maxMin([1, 2, 3, 4, 5, 6, 7]))