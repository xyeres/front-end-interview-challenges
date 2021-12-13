function findFirstUnique(arr) {
  let map = new Map(); // use ES6 map because it preserves order
  let stack = [];

  arr.forEach((num) => {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1)
    } else {
      map.set(num, 1)
    }
  })

  for (const [key, value] of map) {
    if (value === 1) return key; // remember maps are ordered, so the first val === 1 is our first unique integer
  }
}

console.log(findFirstUnique(9, 2, 3, 2, 6, 6)) // expected output: 9