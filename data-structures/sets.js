/*
  Set Operations
*/

let exampleSet = new Set()

// Insertion, add a new element to a set
// Time complexity: O(1)
exampleSet.add('item 1')
exampleSet.add('item 2')
exampleSet.add('item 1')

// Deletion, remove an item
// Time complexity: O(1)
exampleSet.delete('item 1') // true

// Contains, 
// Time complexity: O(1)
exampleSet.has('item 2') // true
exampleSet.has('item 3') // false


//  Utility Functions

// Intersection
{
  let setA = new Set([2, 3, 4, 5, 6])
  let setB = new Set([9, 8, 7, 3, 4])

  function intersection(setA, setB) {
    let intersection = new Set()
    for (var elm of setA) {
      if (setB.has(elm)) intersection.add(elm)
    }
    return intersection
  }
}

// isSuperSet
{
  let setA = new Set([2, 3, 4, 5, 6])
  let setB = new Set([2, 3, 6, 1, 9])

  function isSuperSet(setA, setB) {
    for (let elm of setA) {
      if (!setB.has(elm)) {
        return false
      }
    }
    return true
  }
}
// Union
{
  let setA = new Set([2, 3, 4, 5, 6])
  let setB = new Set([2, 3, 6, 1, 9])

  function union(setA, setB) {
    let union = new Set(setA)
    for (let elm of setB) {
      union.add(elm)
    }
    return union
  }
}

// Difference
{
  let setA = new Set([1, 2, 3, 4])
  let setB = new Set([2, 3, 5, 6, 7, 8, 9])

  function difference(setA, setB) {
    let difference = new Set(setA)
    for (let elm of setB) {
      difference.delete(elm)
    }
    return difference
  }
}