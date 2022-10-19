function maxSubArraySum(nums, size) {
  if (!nums.length) return;

  let currSum = 0;
  let maxSumSeen = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i];

    if (i >= size - 1) {
      maxSumSeen = Math.max(currSum, maxSumSeen);
      currSum -= nums[i - (size - 1)];
    }
  }
  return maxSumSeen;
}

const arr1 = [1,1,1,1,1,1,1,1,3]; 

console.log(maxSubArraySum(arr1, 3)); // 5 
