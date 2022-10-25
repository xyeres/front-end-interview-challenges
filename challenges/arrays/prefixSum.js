/**
 * Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.

Complexity Analysis

Time Complexity: O(N)O(N), where NN is the length of nums.

Space Complexity: O(1)O(1), the space used by leftsum and S.

 */
function pivotIndex(nums) {
  let sum = 0,
    leftSum = 0;

  sum = nums.reduce((total, num) => (total += num), 0);

  for (let i = 0; i < nums.length; i++) {
    if (leftSum === sum - leftSum - nums[i]) return i;
    leftSum += nums[i];
  }
  return -1;
}

// [1,7,3,6,5,6] // sum is 28

// How it plays out iteratively

// 0 == 28 - 0 - 1 // 27
// leftSum = 1
// 1 == 28 - 1 - 7 // 20
// leftSum = 8
// 8 == 28 - 8 - 3 // 17
// leftSum = 11
// 11 == 28 - 11 - 6 // 11
