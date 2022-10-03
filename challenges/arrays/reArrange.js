/**
 * Problem Statement#
    Implement a function, reArrange(arr), which sorts the elements so that all the negative elements appear on the left, and all positive elements appear at the right.

    While zero is NOT positive or negative, we consider zero to be a positive​ integer for this challenge!

    Input#
    An array containing positive and negative elements

    Output#
    A sorted array with negative elements at the left and positive elements at the right

    Sample Input#
    [10,-1,20,4,5,-9,-6]
    Sample Output#
    [-1,-9,-6,10,20,4,5]
 */
// All these are O(n)

// My Solution
function reArrange(arr) {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      temp = arr.splice(i, 1);
      arr.unshift(temp.pop());
    }
  }
  return arr;
}

console.log(reArrange([-1, 5, -4, -3]));

// Other solution
function reArrange(arr) {
  var leftMostElIndx = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      // dont waste a cycle:
      if (i != leftMostElIndx) {
        let tmp = arr[i];
        arr[i] = arr[leftMostElIndx];
        arr[leftMostElIndx] = tmp;
        leftMostElIndx++;
      }
    }
  }
  return arr;
}

console.log(reArrange([10, -1, 20, 4, 5, -9, -6]));

// Other solution
function reArrange(arr) {
  var neg = [];
  var pos = [];
  for (let ele of arr) {
    if (ele < 0) neg.push(ele);
    else pos.push(ele);
  }
  return neg.concat(pos);
}

console.log(reArrange([10, -1, 20, 4, 5, -9, -6]));
