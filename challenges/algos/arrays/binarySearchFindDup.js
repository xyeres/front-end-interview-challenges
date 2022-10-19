function duplicateNumber(nums) {
    if (!nums || nums.length < 2) {
        return -1
    }

    left = 0
    right = nums.length

    while (left + 1 < right) {
        let mid = Math.floor((left + right) / 2)

        if (nums[mid] === mid) {
            return nums[mid]
        } else if (nums[mid] > mid) {
            left = mid
        } else {
            right = mid
        }
    }
}

console.log(duplicateNumber([1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10]))
console.log(duplicateNumber([1, 1, 2, 3, 4]))
console.log(duplicateNumber([1, 1]))