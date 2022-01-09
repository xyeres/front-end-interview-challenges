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

  let j;
  outer: for (let i = 0, arrLength = arr.length; i < arrLength; i++) {
    let current = arr[i];
    j = 0
    while (j < arrLength) {
      if (i !== j && arr[j] == arr[i]) 
        break
      j++
    }
    if (j == arr.length)
      return current
  }

  return null

}

console.log(findFirstUnique([2, 9, 2, 6, 6, 9])) // expected output: 9