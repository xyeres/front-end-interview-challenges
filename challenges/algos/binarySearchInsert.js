/**
 * In this variation we will return the index of the target 
 * OR the index if target was part of the array in order with other elements
 */

function searchInsert(nums, target) {
    if (!nums || nums.length === 0) {
        return -1
    }

    let left = 0;
    let right = nums.length;

    while (left + 1 < right) {
        let mid = Math.floor((right + left) / 2)
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] < target) {
            left = mid
        } else {
            right = mid
        }
    }

    /**
     * There will be four cases to consider:
        nums[left] == target
        nums[left] > target
        nums[right] == target
        nums[right] < target
     */

    if (nums[left] >= target) {
        return left;
    }

    return right

}

console.log(`Index of 9 is ---> ${searchInsert([1, 5, 8, 9, 11, 13, 15, 19, 21], 9)}`);
console.log(`Index of 12 is ---> ${searchInsert([1, 5, 8, 9, 11, 13, 15, 19, 21], 12)}`);
console.log(`Index of -4 is ---> ${searchInsert([1, 5, 8, 9, 11, 13, 15, 19, 21], -4)}`);
console.log(`Index of 27 is ---> ${searchInsert([1, 5, 8, 9, 11, 13, 15, 19, 21], 27)}`);