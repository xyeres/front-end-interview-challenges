/**
 * Problem statement #
    You’re given a function returnNthCat, which takes a variable n and has an object state defined in it.
    Your task is to return the name value of the nth cat object.
  
    Input #
    A value n

    Output #
    name value of the nth cat object

    A sample input/output for the state object is given below.

    Sample input #
    n = 0
    Sample output #
    tom
 */

console.log(returnNthCat(2))

function returnNthCat(n) {
  const state = {
    cats: [
      { catId: 1, name: "tom" },
      { catId: 2, name: "tiggy" },
      { catId: 3, name: "leo" },
      { catId: 4, name: "nixie" }
    ],
    curpage: 3
  }

  const { cats: { [n]: { name } } } = state;


  return name;
}


/**
 * Your task is to use destructuring to extract and display the name of the second object   in  the array.

  Input#
  An array of objects

  Output#
  Name of the second object

  Sample input#
  [{name: "Kelly",}, {name: "Anna",}]
  Sample output#
  "Anna"
 */

function displayName() {
  const exampleObject = { collection: [{ name: "Kelly", }, { name: "Anna", }], }

  const { collection: { [1]: { name } } } = exampleObject;
  const { collection: [, { name: anotherWay }] } = exampleObject;

  console.log(name) //this line should display the correct answer
  console.log(anotherWay) //this line should display the correct answer
}

displayName() 