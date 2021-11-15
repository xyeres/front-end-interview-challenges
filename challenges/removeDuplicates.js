var removeDuplicates = function (nums) {
  nums.map((value, index) => {
    let currentElement = nums[index]
    while (nums.indexOf(currentElement, index + 1) != -1) {
      nums.splice(index, 1)
    }
  })
  return nums.length
}


let nums = [1, 1, 2]
let k = removeDuplicates(nums)

console.log('k: ', k)