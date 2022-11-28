// Write a function that will print an n x n matrix a spiral pattern. In the case of the example matrix,
// the result will be a string array.

const matrix = [
  ["j", "e", "r", "r", "y"],
  ["e", "u", "n", "c", "h"],
  ["m", "o", "!", "l", "e"],
  ["s", "e", "l", "e", "l"],
  ["t", "i", "!", "0", "l"],
];

function spiral(input) {
  let output = [];
  return _spiral(input, output);

  function _spiral(input, output) {
    if (input.length === 0) {
      return output;
    }

    let firstRow = input.shift();
    if (firstRow) {
      output.push(...firstRow);
    }

    for (let row = 0; row < input.length; row++) {
      let el = input[row].pop();
      if (el) {
        output.push(el);
      }
    }

    let bottomRow = input.pop();
    if (bottomRow) {
      bottomRow = bottomRow.reverse();
      output.push(...bottomRow);
    }

    for (let row = input.length - 1; row >= 0; row--) {
      let el = input[row].shift();
      if (el) {
        output.push(el);
      }
    }

    return _spiral(input, output);
  }
}

console.log(spiral(matrix));
