const M = [
  ["j", "e", "r", "r", "y"],
  ["e", "u", "n", "c", "h"],
  ["m", "o", "!", "l", "e"],
  ["s", "e", "l", "e", "l"],
  ["t", "i", "!", "0", "l"],
];

function spiralPrint(M) {
  let topRow = 0,
    leftCol = 0,
    btmRow = M.length - 1,
    rightCol = M[0].length - 1;

  while (topRow < btmRow && leftCol < rightCol) {
    // Print Top Row (left to right)
    for (var col = 0; col <= rightCol; col++) {
      console.log(M[topRow][col])
    }
    topRow++;
    // Pring right column (top to bottom)
    for (var row = topRow; row <= btmRow; row++) {
      console.log(M[row][rightCol])
    }
    rightCol--;
    // Print Bottom Row (right to left)
    if (topRow <= btmRow) {
      for (var col = rightCol; col > 0; col--) {
        console.log(M[btmRow][col]);
      }
      btmRow--;
    }
    if (leftCol <= rightCol) {
      for (var row = btmRow; row > topRow; row--) {
        console.log(M[row][leftCol]);
      }
      leftCol--;
    }
  }
}

spiralPrint(M);
