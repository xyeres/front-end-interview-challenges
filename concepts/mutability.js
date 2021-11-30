/**
 * An immutable object is one that cannot be altered or change, 
 * A mutable object is one that can be modified or changed
 * 
 * In JavaScript some built in immutable objects include: Math or Date
 * 
 * We are given a number of tools to help implement and proect objects with
 * immutabiltiy including:
 * 
 * Object.defineProperty({value, writable, configurable})
 * Object.preventExtensions(obj)
 * Object.seal(obj) // cannot add or delete but can edit values
 * Object.freeze(obj) // runs seal() and cannot write 
 *
*/

class simpleClass {
  constructor() {
    this.something = 43;
  }
  add(result) {
    console.log(result);
  }
  
}

let myO = new simpleClass()

myO.add(234+34);

Object.preventExtensions(myO)

myO.somethingNew = function() {
  console.log('hi i am new')
}

myO.somethingNew()

myO.something = 53
console.log(myO.something)

// Freeze object
Object.freeze(myO)

myO.something = 32
console.log(myO.something)


for (let prop in myO) {
  if (myO.hasOwnProperty(prop)) {

    console.log(prop)
  }
}
Object.keys(myO).forEach(prop => console.log(prop))

// arrays

for (let elem of array) {
  
}

forEach

let array = [4,3,5,6,3]
for ([elm, index] of array.entries()) {
  console.log(elm, index)
}