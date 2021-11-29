var arr = [2, 2, 2, 1, 4]
var weight = 6

// given an array of integers and a target weight, return an array of 
// indexes which add up to the target weight
// if there is no match, return -1 
// the same two indexes cannot be counted twice


function sumBetter(arr, weight) {
  var hashmap = {}
  // iterate through array, on the hashmap save the index as the value, and
  // the difference between the current index and the weight as the key,
  // if hashmap[difference] != undefined, return [i, hashmap[difference]]
  for (var i = 0, arrLen = arr.length; i < arrLen; i++) {
    var currentElement = arr[i];
    var difference = weight - currentElement;

    if (hashmap[currentElement] != undefined) {
      return [i, hashmap[currentElement]]
    } else {
      hashmap[difference] = i;
    }
    console.log(hashmap)
  }
  return -1
}

var result = sumBetter(arr, weight)
console.log('result: ', result)