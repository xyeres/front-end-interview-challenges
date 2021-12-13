/**
 * Problem statement #
  Given an array, you have to remove the first two elements using array destructuring.

  This problem will help you in implementing basic array destructuring. Use it to solve the challenge.

  Input #
  An array list

  Output #
  list returned with the first two elements removed

  Sample input #
  [1,2,3,4,5,6,7,8]
  Sample output #
  [3,4,5,6,7,8]
 */


function removeFirstTwo(list) {
  const [,, ...rest] = list
  return rest;
}