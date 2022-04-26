function binarySearch(nums, target) {
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

    if (nums[left] == target) {
        return left;
    }
    // be sure to check that nums[left] is not target,

    return -1
    // otherwise return -1
}

const nums = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59];

console.log(`Index of 37 is ---> ${binarySearch(nums, 37)}`);
console.log(`Index of 1 is ---> ${binarySearch(nums, 1)}`);