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
var longestCommonPrefix = function (strs) {
  if (strs == null || strs.length == 0) return "";
  for (let i = 0; i < strs[0].length; i++) {
    let c = strs[0].charAt(i);

    for (let j = 1; j < strs.length; j++) {
      if (i == strs[j].length || strs[j].charAt(i) != c)
        return strs[0] = strs[0].substring(0, i);
    }

  }
  return strs[0];
};

let strs = ["dogg",
  "dogracecar",
  "dogcar",
  "do"]


console.log(longestCommonPrefix(strs))