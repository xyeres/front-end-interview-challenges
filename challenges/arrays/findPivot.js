
let nums = [1, 7, 3, 6, 5, 6]
let nums2 = [1, 2, 2, 6, 5, 5]

function pivot(nums) {
  var leftTotal = 0;
  var rightTotal = nums.reduce((a, n) => a += n, 0);

  var result = -1

  nums.forEach((num, i, arr) => {
    if (i > 0) {
      leftTotal += arr[i - 1]
    }
    rightTotal -= num;
    if (leftTotal == rightTotal) {
      result = i
    }
  })

  return result;

}

console.log(pivot(nums)) // 3
console.log(pivot(nums2)) // -1