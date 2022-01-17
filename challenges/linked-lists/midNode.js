/*

  Challenge 7: Find Middle Node of Linked List
  Here's another interesting coding challenge to test your knowledge on linked lists.

  Problem Statement#
  You have to implement the findMid() function, which will take a linked list as an input and return the middle node.If the length of the list is even, the middle value will occur at \dfrac{ length } { 2 }
  2

  length
    .For a list of odd length, the middle value will be \dfrac{ length } { 2 } +1
  2

  length
    + 1.

  Input#
  A singly linked list.

  Output#
  The middle node.

  Sample Input#
  LinkedList = 7 -> 14 -> 10 -> 21
  Sample Output#
  14 

*/

class Node {
  constructor(data) {
    this.data = data;
    this.nextElement = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  //Insertion At Head  
  insertAtHead(newData) {
    let tempNode = new Node(newData);
    tempNode.nextElement = this.head;
    this.head = tempNode;
    return this; //returning the updated list
  }

  isEmpty() {
    return (this.head == null);
  }

  //function to print the linked list
  printList() {
    if (this.isEmpty()) {
      console.log("Empty List");
      return false;
    } else {
      let temp = this.head;
      while (temp != null) {
        process.stdout.write(String(temp.data));
        process.stdout.write(" -> ");
        temp = temp.nextElement;
      }
      console.log("null");
      return true;
    }
  }

  getHead() {
    return this.head;
  }
  setHead(newHead) {
    this.head = newHead;
    return this;
  }
  getListStr() {
    if (this.isEmpty()) {
      console.log("Empty List");
      return "null";
    } else {
      let st = "";
      let temp = this.head
      while (temp != null) {
        st += String(temp.data);
        st += " -> ";
        temp = temp.nextElement;
      }
      st += "null";
      return st;
    }
  }
  insertAtTail(newData) {
    //Creating a new Node with data as newData
    let node = new Node(newData);

    //check for case when list is empty
    if (this.isEmpty()) {
      //Needs to Insert the new node at Head
      this.head = node;
      return this;
    }

    //Start from head
    let currentNode = this.head;

    //Iterate to the last element
    while (currentNode.nextElement != null) {
      currentNode = currentNode.nextElement;
    }

    //Make new node the nextElement of last node of list
    currentNode.nextElement = node;
    return this;
  }
  search(value) {
    //Start from the first element
    let currentNode = this.head;

    //Traverse the list until you find the value or reach the end
    while (currentNode != null) {
      if (currentNode.data == value) {
        return true; //value found
      }
      currentNode = currentNode.nextElement
    }
    return false; //value not found
  }
  deleteAtHead() {
    //if list is empty, do nothing
    if (this.isEmpty()) {
      return this;
    }
    //Get the head and first element of the list
    let firstElement = this.head;

    //If list is not empty, link head to the nextElement of firstElement
    this.head = firstElement.nextElement;

    return this;
  }
  deleteVal(value) {
    let deleted = null; //True or False
    //Write code here

    //if list is empty return false
    if (this.isEmpty()) {
      return false;
    }

    //else get pointer to head
    let currentNode = this.head;
    // if first node's is the node to be deleted, delete it and return true
    if (currentNode.data == value) {
      this.head = currentNode.nextElement;
      return true;
    }

    // else traverse the list
    while (currentNode.nextElement != null) {
      // if a node whose next node has the value as data, is found, delete it from the list and return true
      if (currentNode.nextElement.data == value) {
        currentNode.nextElement = currentNode.nextElement.nextElement;
        return true;
      }
      currentNode = currentNode.nextElement;
    }
    //else node was not found, return false
    deleted = false;
    return deleted;
  }
  deleteAtTail() {
    // check for the case when linked list is empty
    if (this.isEmpty()) {
      return this;
    }
    //if linked list is not empty, get the pointer to first node
    let firstNode = this.head;
    //check for the corner case when linked list has only one element
    if (firstNode.nextElement == null) {
      this.deleteAtHead();
      return this;
    }
    //otherwise traverse to reach second last node
    while (firstNode.nextElement.nextElement != null) {
      firstNode = firstNode.nextElement;
    }
    //since you have reached second last node, just update its nextElement pointer to point at null, skipping the last node
    firstNode.nextElement = null;
    return this;
  }
}




function findMid(list) {
  if (list.isEmpty()) return null;

  let slowNode = list.getHead()
  let fastNode = list.getHead();

  while (slowNode.nextElement != null && fastNode.nextElement != null
    && fastNode.nextElement.nextElement != null) {
    slowNode = slowNode.nextElement;
    fastNode = fastNode.nextElement.nextElement
  }
  return slowNode
}


const list = new LinkedList()

list.insertAtHead(1)
list.insertAtHead(2)
list.insertAtHead(9)
list.insertAtHead(5)
list.insertAtHead(1)


console.log(findMid(list))