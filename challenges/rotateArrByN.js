/**
 * 
  Time Complexity
  Since the entire array is iterated over, the time complexity of this solution is O(n)O(n)
  Problem Statement
    Implement a function rightRotate(arr,n) that will rotate the given array by n.

    Input#
    An array and a number by which to rotate that array

    Output#
    The given array rotated by n elements

    Sample Input#
    arr = [1,2,3,4,5]
    n = 3
    Sample Output#
    arr = [3,4,5,1,2]
 */
function rightRotate(arr, n) {
  let rotated = [];
  arr.forEach((val, i, array) => {
    let rotation = i + n;
    if (rotation >= array.length) {
      rotation = rotation - array.length;
    }
    rotated[rotation] = val;
  })
  return rotated;
}

// console.log(rightRotate([300, -1, 3, 0], 3))
// console.log(rightRotate([1, 2, 3, 4, 5], 3))

/**
 * 
 * @param {*} arr 
 * @param {*} n 
 * Time Complexity
    The complexity of the splice() function is O(n)O(n). Since splice() add or remove elements in the original array. Therefore, in the worst-case, we have to shift n-1n−1 elements.
    The overall time complexity of this solution is O(n)O(n).
 */
function righRotateSplice(arr, n) {
  return (arr.splice(arr.length-n).concat(arr.splice(0, arr.length)))
}

console.log(righRotateSplice([1, 2, 3, 4, 5], 3))