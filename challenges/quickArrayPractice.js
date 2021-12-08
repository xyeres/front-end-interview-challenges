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
