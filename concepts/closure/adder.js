// classic closure example

function makeAdder(num1) {
  return function add(num2) {
    return num1 + num2
  }
}

var add10To = makeAdder(10)

console.log(add10To(100))
