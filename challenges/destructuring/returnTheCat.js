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


  return name;
}