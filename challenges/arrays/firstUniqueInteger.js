function findFirstUniqueMap(arr) {
  // let map = new Map(); // use ES6 map because it preserves order
  // let stack = [];

  // arr.forEach((num) => {
  //   if (map.has(num)) {
  //     map.set(num, map.get(num) + 1)
  //   } else {
  //     map.set(num, 1)
  //   }
  // })

  // for (const [key, value] of map) {
  //   if (value === 1) return key; // remember maps are ordered, so the first val === 1 is our first unique integer
  // }

  //
}

function findFirstUnique(arr) {
  // loop through array as i
  // loop through remaining of array as j
    // if i != j && arr[i] == arr[j], break out
  // if j === arr.length // if we get to the end and still havent found a match, then it is unique
    // return arr[i]
  // otherwise return NULL
  
  let j;
  for (let i = 0; i < arr.length; i++) {
    j = 0
    while(j < arr.length) {
      if (i != j && arr[i] === arr[j]) {
        break
      }
      j++
    }
    if (j === arr.length) {
      return arr[i]
    }
  }
  return null
}

console.log(findFirstUnique([2, 9, 1, 2, 6, 6, 9])) // expected output: 9