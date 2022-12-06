var singleNumber = function (nums) {
  var seen = {};

  for (let i = 0; i < nums.length; i++) {
    if (seen[nums[i]] !== undefined) {
      delete seen[nums[i]];
    } else {
      seen[nums[i]] = nums[i];
    }
  }
  return Object.keys(seen)[0];
};

console.log(
  singleNumber([4, 2, 1, 1, 2, 7, 8, 7, 8, 9, 9, 22, 33, 22, 33, 500, 4])
);
