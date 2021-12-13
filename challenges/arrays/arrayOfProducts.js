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

  // loop through arr from start to end
  // store in new product[i] array the product of all elements to the 
  // left of arr[i]
  // use tmp to store 
  let product = [];
  let tmp = 1;

  for (let i = 0; i < arr.length; i++) {
    product[i] = tmp;
    tmp = tmp * arr[i];
  }

  // loop through arr from end to start,
  // multiply all numbesr to right of arr[i]
  tmp = 1;
  for (let i = arr.length - 1; i > -1; i--) {
    product[i] = product[i] * tmp;
    tmp = tmp * arr[i];
  }
  return product;
}

console.log(findProductOn([1, 3, 4, 5])) // tmp = 1, 1, 3, 12 // tmp = 1, 5, 20, 60// product = [60, 20, 15, 12]
