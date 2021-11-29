// /*
//   Stacks: FILO
//   Implement Stack Datastructure with:
//     -Peek
//     -Insertion
//     =Deletion
//     -Access Nth item from top
//     -Search
// */


// export default function Stack(array) {
//   this.array = [];
//   if (array) {
//     this.array = array;
//   }
// }

// // Peek
// Stack.prototype.peek = function () {
//   return this.array[this.array.length - 1];
// }

// // isEmpty
// Stack.prototype.isEmpty = function() {
//   return this.array.length === 0;
// }

// // Insertion
// Stack.prototype.push = function (value) {
//   this.array.push(value)
// }

// // Deletion
// Stack.prototype.pop = function () {
//   return this.array.pop();
// }

// // getBuffer - return stacks array for use as buffer later
// Stack.prototype.getBuffer = function() {
//   return this.array.slice()
// }

// // Access Nth item from top
// Stack.prototype.access = function (n) {
//   // lets say we want item 4 from top, 
//   // Pop 4 times to get there, but return last pop as result
//   if (n < 0) {
//     throw 'n must be >= 0'
//   }

//   // First get array from stack
//   let bufferArray = this.getBuffer();
//   // Create buffer stack so we don't mutate original stack
//   let bufferStack = new Stack(bufferArray);

//   while (--n !== 0) { // Pop all but last Nth item
//     bufferStack.pop()
//   }
//   return bufferStack.pop(); // return Nth item requested
// }

// // Search - find element in stack and return true or return false
// Stack.prototype.search = function(element) {
//   let bufferArray = this.getBuffer();
//   let bufferStack = new Stack(bufferArray);

//   while (!bufferStack.isEmpty()) {
//     if (bufferStack.pop() === element) {
//       return true
//     }
//   }
//   return false
// }

// const stack1 = new Stack();

// stack1.push(2)
// stack1.push(5)
// stack1.push(144352)
// stack1.push(5348734578934)

// console.log(stack1.access(2))
// console.log(stack1.search(32))
// console.log(stack1.peek())


function fn1() {
  console.log('hi i am looking for ', this.michael)
}

function fn2() {

}

fn2.michael = 'michael'

fn1.prototype = fn2;

console.log(fn1())
