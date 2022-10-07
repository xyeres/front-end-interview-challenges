function binarySearch(nums, target) {
    'use strict';
    if (!nums || nums.length === 0) {
        return -1
    }

    var left = 0, right = nums.length;

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

    // be sure to check that nums[left] is not target,
    if (nums[left] == target) {
        return left;
    }

    // otherwise return -1
    return -1
}


const nums = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59];

console.log(`Index of 37 is ---> ${binarySearch(nums, 37)}`); // 11
console.log(`Index of 1 is ---> ${binarySearch(nums, 5)}`); // 2
