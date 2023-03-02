// /**
//  * @param {string} s
//  * @return {boolean}
//  */

// function Stack(array) {
//   this.array = [];

//   if (array) {
//     this.array = array;
//   }
// }

// Stack.prototype.pop = function () {
//   return this.array.pop()
// }

// Stack.prototype.push = function (value) {
//   this.array.push(value)
// }

// Stack.prototype.isEmpty = function () {
//   return this.array.length === 0;
// }

// Stack.prototype.peek = function () {
//   return this.array[this.array.length - 1];
// }

// var isValid = function (s) {
//   const types = {
//     "(": ")",
//     "[": "]",
//     "{": "}"
//   }

//   let lastElement = null;

//   // create a buffer stack to keep track of the parentheses
//   let bufferStack = new Stack();

//   // Loop through the length of s
//   for (let i = 0, stringLen = s.length; i < stringLen; i++) {
//     let currentElement = s.charAt(i);

//     // If opening parentheses:
//     if (currentElement in types) {
//       bufferStack.push(currentElement);
//       lastElement = currentElement;

//     } else { // it must be a closing element
//       if (types[bufferStack.peek()] === currentElement) {
//         bufferStack.pop()
//       } else {
//         return false
//       }
//     }
//   }
//   return bufferStack.isEmpty();
// };

// console.log(isValid("(){}}{")) // false
// console.log(isValid("(({}))")) // true
// console.log(isValid("([)]{}")) // false

// /**
//  * SIMPLER VERSION
//  */

// function balancedParentheses(str) {
//   let stack = [];

//   let types = {
//     "{": "}",
//     "[": "]",
//     "(": ")"
//   }

//   for (let i in str) {
//     let currentElement = str.charAt(i)
//     let peek = stack[stack.length - 1];

//     if (currentElement in types) {
//       stack.push(currentElement)
//     } else if (currentElement === types[peek]) {
//       stack.pop()
//     } else {
//       return false;
//     }

//   }
//   return stack.length === 0;
// }

// console.log(balancedParentheses('{[()]}'))
// console.log(balancedParentheses())

function balancedParentheses2(s) {
  let stack = [];
  let types = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  let typeValues = Object.values(types);

  for (let c of s) {
    if (c in types) {
      stack.push(c);
    }

    if (typeValues.includes(c)) {
      if (c !== types[stack.pop()]) {
        return false;
      }
    }
  }
  return stack.length == 0;
}

console.log(balancedParentheses2("((){}[[[()]]])]"));
console.log(balancedParentheses2("{[(asf)adf]}asf"));
