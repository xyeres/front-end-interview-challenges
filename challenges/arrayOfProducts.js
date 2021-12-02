function findProduct(arr) {
  // find product of all numbers in array
  // to find a specifc answer for an index:
  // take the value at that index and divide the product of all numbers by it and
  // insert it into a new array
  let totalProduct = arr.reduce((totalProduct, curr) => (totalProduct = totalProduct * curr), 1)

  let answer = [];

  arr.forEach((curr) => {
    let result = totalProduct / curr;
    answer.push(result)
  })
  return answer;
}

console.log(findProduct([1, 2, 3, 4]))

// O(n)^2 Cubic time solution
function findProductOn2(arr) {
  let currentProduct, left = 1;
  let answer = [];

  for (var i = 0; i < arr.length; i++) { // loop through all numbers
    currentProduct = 1;
    // get product of all numbers to the right:
    for (var j = i + 1; j < arr.length; j++) {
      currentProduct = currentProduct * arr[j]
    }

    answer.push(currentProduct * left);

    // update left:
    left = left * arr[i];
  }
  return answer;
}

console.log(findProductOn2([1, 2, 3, 4]))

// O(n) Linear Time solution
function findProductOn(arr) {

  var temp = 1,
    product = [];
  for (var i = 0; i < arr.length; i++) {
    product[i] = temp;
    temp = temp * arr[i];
  }
  
  temp = 1;
  for (var j = arr.length -1; j > -1; --j) {
    product[j] *= temp;
    temp *= arr[j];
  }
  
  return product;

}

console.log(findProductOn([1, 3, 4, 5]))
