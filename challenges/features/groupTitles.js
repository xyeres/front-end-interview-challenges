/**
 * Time complexity: nxk since we have to loop through entire array of strings and each character in each string
 * Same for space since we have to save each string as a key/val pair in the map
 * 
 * Loop through the array of strings and for each string create a 26 character vector, where each # character represents the number
 * of times that character is found in the string, save this as the key of the hashmap with the value being the string that creates this vector
 * 
 * return an array of arrays, each sub-array is a set containing annagrams matching each vector key
 * 
 * when user searches an anagram, return the correlating set
 */

function groupTitles(strs) {
    const hashmap = {}
    for (let s of strs) {
        const count = new Array(26).fill(0)
        for (let c of s) {
            const index = c.charCodeAt(0) - 'a'.charCodeAt(0)
            count[index] += 1
        }
        let key = count;
        if (key in hashmap){
            hashmap[key].push(s)
        } else {
            hashmap[key] = [s]
        }
    }
    
    const result = []
    for (let key in hashmap) {
        result.push(hashmap[key])
    }
    return result;
}

var titles = ["duel","dule","speed", "spede","deul","cars"]
var gt = groupTitles(titles)
var query = 'spede'

for (var [_, g] of Object.entries(gt)) {
    if (g.includes(query)) {
        console.log(g)
    }
}