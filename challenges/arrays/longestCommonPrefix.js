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

let strs = ["dagg",
  "dagracecar",
  "dagcar",
  "dad"]

var longestCommonPrefix = function (strs) {
  // Use 1st word as prefix base
  let prefix = strs[0];

  // Loop through remaining words
  for (let i = 1; i < strs.length; i++) {
    // While the current prefix does not exist in the current word,
    while(strs[i].indexOf(prefix) != 0) {
      // trim the prefix by 1 character until there is a common prefix or the len of prefix is 0,
      prefix = prefix.substring(0, prefix.length - 1);
        // return '' if len of prefix is less than 2
      if (prefix.length < 1) return '';
    }
  }
  // else return remaining prefix if one exists after looping through all words
  return prefix;
}
console.log(longestCommonPrefix(strs))