function findFirstUnique(arr) {
  // create a map,
  const arrMap = new Map();

  arr.forEach((v) => {
    if (arrMap.has(v)) {
      arrMap.set(v, 0)
    } else {
      arrMap.set(v, 1)
    }
  })
  // add each item in the array as a key, val as 1 to start
  // if item is encounted again, make val = 0

  for (let [key, val] of arrMap) {
    if (val === 1) {
      return key
    }
  }

  return -1
  // loop through map, if value == 0, return that key
}

console.log(findFirstUnique([1, 1, 1, 2,2, 6, 6, 9])) // expected output: 1