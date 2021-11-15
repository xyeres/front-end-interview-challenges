// answer[i] % answer[j] == 0, or
// answer[j] % answer[i] == 0

/**
 * @param {number[]} nums
 * @return {number[]}
 */

//
// Input: nums = [1, 2, 3]
// Output: [1, 2]
// Explanation: [1, 3] is also accepted.
var largestDivisibleSubset = function (nums) {
  // brute force:
  let answer = [];
  let possibles = [];
  for (var i = 0, numsLen = nums.length; i < numsLen; i++) {
    for (var j = 0; j < numsLen; j++) {
      if (nums[j] % nums[i] == 0) {

      }
      possibles.push(nums[i])
    }
  }
  return answer;
};

let nums = [1, 2, 3]
console.log(largestDivisibleSubset(nums))
