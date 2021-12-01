/**
 * Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 */

/**
 * @param {string[]} strs
 * @return {string}
 */

// Solution using horizontal scanning
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '';
  let prefix = strs[0]; // use 1st word as prefix base case

  for (let i = 1; i < strs.length; i++) { // loop through remaining words
    while(strs[i].indexOf(prefix) != 0) { // while current word is not contained in prefix
      prefix = prefix.substring(0, prefix.length - 1); // trim 1 character off the prefix and check again
      if (prefix.length < 2) return ''; // if the prefix is less than 2 chars, a common prefix doesn't exist so return ''
    }
  }
  return prefix; // if prefix remains then it is the LCP, return it!
};

let strs = ["dvgg",
  "dvgracecar",
  "dzgcar",
  "dad"]


console.log(longestCommonPrefix(strs))
