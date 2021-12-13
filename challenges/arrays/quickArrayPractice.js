/**
 * Thanks to https://github.com/jamesqquick for this practice sheet
 */


/**
 *  Implement the following using the sample data below:
 * 
 *  MAP
    Get an array of all names
    Get an array of all heights
    Get an array of objects with just name and height properties
    Get an array of all first names

    REDUCE
    Get the total mass of all characters
    Get the total height of all characters
    Get the total number of characters in all the character names
    Get the total number of characters by eye color (hint. a map of eye color to count)

    FILTER
    Get characters with mass greater than 100
    Get characters with height less than 200
    Get all male characters
    Get all female characters

    SORT
    Sort by name
    Sort by mass
    Sort by height
    Sort by gender

    EVERY
    Does every character have blue eyes?
    Does every character have mass more than 40?
    Is every character shorter than 200?
    Is every character male?

    SOME
    Is there at least one male character?
    Is there at least one character with blue eyes?
    Is there at least one character taller than 200?
    Is there at least one character that has mass less than 50?
 */

// Here's a sample piece of Star Wars data from the Star Wars API.

const data = [
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    eye_color: 'blue',
    gender: 'male',
  },
  {
    name: 'Darth Vader',
    height: '202',
    mass: '136',
    eye_color: 'yellow',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: '150',
    mass: '49',
    eye_color: 'brown',
    gender: 'female',
  },
  {
    name: 'Anakin Skywalker',
    height: '188',
    mass: '84',
    eye_color: 'blue',
    gender: 'male',
  },
];


// MAP
//     Get an array of all names
const names = data.map((c) => c.name)
//     Get an array of all heights
const heights = data.map((c) => c.height)
//     Get an array of objects with just name and height properties
const minified = data.map((c) => ({ name: c["name"], height: c["height"] }))
//     Get an array of all first names
const firstNames = data.map((c) => c.name.split(' ')[0])

// REDUCE
// Get the total mass of all characters
const totalMass = data.reduce((acc, character) => (acc + parseInt(character.mass)), 0)
// Get the total height of all characters
const totalHeight = data.reduce((acc, character) => (acc + parseInt(character.height)), 0)
// Get the total number of characters in all the character names
const totalCharLength = data.reduce((acc, character) => {
  return acc + character.name.length
}, 0)

// Get the total number of characters by eye color(hint.a map of eye color to count)
const countEyeColor = data.reduce((acc, character) => {
  if (acc[character.eye_color]) {
    acc[character.eye_color]++;
  } else {
    acc[character.eye_color] = 1;
  }
  return acc;
}, {})


// FILTER
// Get characters with mass greater than 100
const massGreaterThan100 = data.filter((char) => char.mass > 100)
// Get characters with height less than 200
const heightLT200 = data.filter((val) => val.height < 200)
// Get all male characters
const males = data.filter((val) => val.gender === 'male');
// Get all female characters
const females = data.filter((val) => val.gender === 'female')


// SORT
// Sort by name
let byName = data.sort((a, b) => {
  if (a.name < b.name) return -1;
  return 1;
})

// Sort by mass
let byMass = data.sort((a, b) => {
  return a.mass - b.mass;
})
// Sort by height
let byHeight = data.sort((a,b)=> {
  return b.height - a.height;
})
// Sort by gender
let byGender = data.sort((a,b) => {
  if (a.gender === 'male') return 1
  return -1
})

console.log(byGender)


// EVERY
// Does every character have blue eyes ?
const hasBlueEyes = data.every((val) => val.eye_color === 'blue')
// Does every character have mass more than 40 ?
const hasMassOver40 = data.every((val) => val.mass > 40)
// Is every character shorter than 200 ?
const hasHeightLT200 = data.every((val) => val.height < 200)
// Is every character male ?
const isAllMale = data.every((val) => val.gender === 'male')

// SOME
// Is there at least one male character ?
const someMale = data.some((val) => val.gender === 'male')
// Is there at least one character with blue eyes ?
const someBlueEyes = data.some((val) => val.eye_color === 'blue')
// Is there at least one character taller than 200 ?
const someTallerThan200 = data.some((val) => val.height > 200)
// Is there at least one character that has mass less than 50 ?
const someLT50Mass = data.some((val) => val.mass < 50)
