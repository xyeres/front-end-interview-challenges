function Stack(array) {
  this.array = [];
  if (array) {
    this.array = array;
  }
}

// Peek
Stack.prototype.peek = function () {
  return this.array[this.array.length - 1];
}

// isEmpty
Stack.prototype.isEmpty = function () {
  return this.array.length === 0;
}

// Insertion
Stack.prototype.push = function (value) {
  this.array.push(value)
}

// Deletion
Stack.prototype.pop = function () {
  return this.array.pop();
}

// getBuffer - return stacks array for use as buffer later
Stack.prototype.getBuffer = function () {
  return this.array.slice()
}

// Access Nth item from top
Stack.prototype.access = function (n) {
  // lets say we want item 4 from top, 
  // Pop 4 times to get there, but return last pop as result
  if (n < 0) {
    throw 'n must be >= 0'
  }

  // First get array from stack
  let bufferArray = this.getBuffer();
  // Create buffer stack so we don't mutate original stack
  let bufferStack = new Stack(bufferArray);

  while (--n !== 0) { // Pop all but last Nth item
    bufferStack.pop()
  }
  return bufferStack.pop(); // return Nth item requested
}

// Search - find element in stack and return true or return false
Stack.prototype.search = function (element) {
  let bufferArray = this.getBuffer();
  let bufferStack = new Stack(bufferArray);

  while (!bufferStack.isEmpty()) {
    if (bufferStack.pop() === element) {
      return true
    }
  }
  return false
}

/*
  Queues: FIFO
  Implement Queue Datastructure with:
    -Peek
    -Enqueue
    =Dequeue
    -Access Nth item from top
    -Search
*/

// Queue Class
function Queue(array) {
  this.array = [];
  if (array) {
    this.array = array;
  }
}

Queue.prototype.isEmpty = function () {
  return this.array.length === 0;
}

Queue.prototype.getBuffer = function () {
  return this.array.slice()
}

// Peek
Queue.prototype.peek = function () {
  return this.array[0];
}

// Enqueue
Queue.prototype.enqueue = function (value) {
  this.array.push(value)
}

// Dequeue and return value
Queue.prototype.dequeue = function () {
  return this.array.shift()
}

// Access Nth from last added
// MAKE SURE you don't mutate original array
Queue.prototype.access = function (n) {
  if (n < 0) {
    throw 'n must be >= 0';
  }

  // create buffer queque
  let bufferArray = this.getBuffer();
  let bufferQueue = new Queue(bufferArray);


  // dequeue until you have 1 left before Nth item
  while (--n > 0) {
    bufferQueue.dequeue()
  }
  // Return Nth item
  return bufferQueue.dequeue();
}

// Search
Queue.prototype.search = function (element) {
  let bufferArray = this.getBuffer();
  let bufferQueue = new Queue(bufferArray);

  while (!bufferQueue.isEmpty()) {
    if (bufferQueue.dequeue() === element) {
      return true;
    }
  }
  return false;
}

/**
 * Queue using a stack
 * Remember, queue is FIFO, so when using the stack (FILO) you'll need to coorce the stack to pop the first element last
 */

function QueueStack() {
  this.inbox = new Queue();
}

QueueStack.prototype.push = function (value) {
  this.inbox.enqueue(value)
}

QueueStack.prototype.pop = function () {
  let counter = 0;
  let bufferQueue = new Queue();
  let size = this.inbox.array.length;

  // enqueue all elements inside the main queue except for the last one
  // then return last element
  while (++counter < size) {
    bufferQueue.enqueue(this.inbox.dequeue())
  }
  let popped = this.inbox.dequeue();
  this.inbox = bufferQueue;
  return popped;
}




/*
  Stack using a queue!
  Remember, stack is FILO, so make a stack do that instead of FIFO
*/

function TwoStackQueue() {
  this.inbox = new Stack();
  this.outbox = new Stack();
}

TwoStackQueue.prototype.enqueue = function (value) {
  this.inbox.push(value);
}

TwoStackQueue.prototype.dequeue = function () {
  // Needs to dequeue in FIFO order how can we using POP? 
  // Right now the order could be [1,2,3,4,5]
  // need to reverse the array
  if (this.outbox.isEmpty()) {
    while (!this.inbox.isEmpty()) {
      this.outbox.push(this.inbox.pop())
    }
  }
  return this.outbox.pop()
}

let twostackqueue = new TwoStackQueue()

twostackqueue.enqueue(1);
twostackqueue.enqueue(2);
twostackqueue.enqueue(3);
twostackqueue.enqueue(4);
twostackqueue.enqueue(5);

console.log(twostackqueue.dequeue());
console.log(twostackqueue.dequeue());
console.log(twostackqueue.dequeue());


// [1, 2, 3, 4, 5]
// To reverse order, all of the elements could be pushed
// onto a second stack and pop that second stack
// [1,2,3,4,5] // push to second by popping into second
// [5,4,3,2,1] // pop

// [1,2,3,4,5] // then pop That one off