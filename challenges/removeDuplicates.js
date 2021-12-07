var removeDuplicates = function (nums) {
  nums.map((currentElement, index) => {
    while (nums.indexOf(currentElement, index + 1) != -1) {
      nums.splice(index, 1)
    }
  })
  return nums
}


let nums = [1, 1, 2]
let k = removeDuplicates(nums)

console.log('k: ', k)