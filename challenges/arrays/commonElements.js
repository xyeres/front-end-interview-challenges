// Given an array of sorted arrays of numbers, return an array of common elements, 
// if none exist, return an empty array

function commonElements(kArray) {
  var last, hashmap = {}, answer = [];
  var kArrayLen = kArray.length;

  // loop through karray,
  for (var i = 0; i < kArrayLen; i++) {
    // loop through each inner array
    let currentArray = kArray[i];
    last = null;

    for (var j = 0, arrayLen = currentArray.length; j < arrayLen; j++) {
      let currentItem = currentArray[j];

      if (currentItem != last) {
        // add each element to hashmap if it's not already there (keep track with last)
        // count each element, adding 1 if it's in the hashmap already
        if (!hashmap[currentItem]) {
          hashmap[currentItem] = 1;
        } else {
          hashmap[currentItem]++;
        }
      }
      last = currentItem;
    }
  }

  // loop through hashmap and compare each value to the length of the kArray
  // if the length of an element == length of the kArray that means it is in
  // each array, go ahead and add that as a common element to the answer array
  for (var prop in hashmap) {
    if (hashmap[prop] == kArrayLen) {
      answer.push(parseInt(prop))
    }
  }
  return answer;
}

let kArray = [
  [1, 2, 2, 2, 3],
  [2, 4, 5],
  [2, 7, 97],
  [1, 2, 898]
]

console.log('result: ', commonElements(kArray))
