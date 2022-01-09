function findFirstUnique(arr) {
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

  let j;
  for (let i = 0; i < arr.length; i++) {
    j = 0
    while (j < arr.length) {
      if (i !== j && arr[i] == arr[j]) {
        break
      }
      j += 1
    }
    if (j == arr.length) {
      return arr[i]
    }
  }

  return null

}

console.log(findFirstUnique([2, 9, 1, 2, 6, 6, 9])) // expected output: 9