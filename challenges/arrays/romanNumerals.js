/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let stringArray = Array.from(s)

  const values = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  }

  let total = 0;
  
  const modifiers = {
    "I": ["V", "X"],
    "X": ["L", "C"],
    "C": ["D", "M"]
  }


  stringArray.forEach((currentElement, index, arr) => {
    let letterValue = values[currentElement];
    let prevElement = arr[index - 1];
    let isModifiable = modifiers[prevElement] !== undefined;

    if (isModifiable) {
      if (modifiers[prevElement].indexOf(currentElement) != -1) {
        letterValue = letterValue - values[prevElement];
        total = total - values[prevElement];
      }
    }
    
    total += letterValue;

  })

  return total;

};

console.log(romanToInt('DCXXI'))

