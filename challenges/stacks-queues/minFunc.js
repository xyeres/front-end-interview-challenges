"use strict";

/**
 Problem Statement#
  You have to implement the minStack class, which will have a min() function. Whenever min() is called, the minimum value of the stack is returned in O(1) time. The element is not popped from the stack; its value is simply returned.

  Output#
  Returns minimum number in O(1) time

  Sample Output#
  //minStack = [9, 3, 1, 4, 2, 5]
  //minStack.min()
  1
 */

class Stack {
  constructor() {
    this.items = [];
    this.top = null;
  }

  getTop() {
    if (this.items.length == 0)
      return null;
    return this.top;
  }

  isEmpty() {
    return this.items.length == 0;
  }

  size() {
    return this.items.length;
  }

  push(element) {
    this.items.push(element);
    this.top = element;
  }

  pop() {
    if (this.items.length != 0) {
      if (this.items.length == 1) {
        this.top = null;
        return this.items.pop();
      } else {
        this.top = this.items[this.items.length - 2];
        return this.items.pop();
      }

    } else
      return null;
  }


}

class minStack {
    constructor() {
        this.stack = new Stack();
        this.minStack = new Stack();
    }

    pop() {
        this.minStack.pop()
        return this.stack.pop();
    }

    push(value) {
        this.stack.push(value)
        
        if (value > this.minStack.getTop() && this.minStack.isEmpty() == false) {
          this.minStack.push(this.minStack.getTop())
        } else {
          this.minStack.push(value)
        }
    }

    min() {
        return this.minStack.getTop();
    }
}

