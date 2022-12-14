// Write a function that will print an n x n matrix a spiral pattern. In the case of the example matrix,
// the result will be a string array.

const matrix = [
  ["j", "e", "r", "r", "y"],
  ["e", "u", "n", "c", "h"],
  ["m", "o", "!", "l", "e"],
  ["s", "e", "l", "e", "l"],
  ["t", "i", "!", "0", "l"],
];

function spiral(arr, result = []) {
  if (arr.length === 0) {
    return result;
  }

  result.push(...arr.shift());

  // get last column
  for (let i = 0; i < matrix.length; i++) {
    result.push(matrix[i].pop());
  }

  let lastRow = matrix.pop();
  if (lastRow !== undefined) {
    while (lastRow.length > 0) {
      result.push(lastRow.pop());
    }
  }

  // get first column
  for (let len = matrix.length, i = len - 1; i >= 0; i--) {
    result.push(matrix[i].shift());
  }

  return spiral(arr, result);
}
console.log(spiral(matrix));
