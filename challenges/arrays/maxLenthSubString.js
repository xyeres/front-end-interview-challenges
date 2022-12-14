var maxLengthBetweenEqualCharacters = function (s) {
  let max = 0;
  let found = false;
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
      let c = s.charAt(i)
      if (map.has(c)) {
          found = true;
          max = Math.max(max, i - map.get(c) - 1)
      } else {
          map.set(c, i)
      }
  }
  return found ? max : -1
};

console.log(maxLengthBetweenEqualCharacters("cabbac"));
