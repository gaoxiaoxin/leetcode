/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let result = [];
let path = [];
var subsetsWithDup = function (nums) {
  result = [];
  nums.sort((x, y) => x - y);
  backtracking(nums, 0);
  return result;
};

function backtracking(nums, startIndex) {
  result.push(Array.from(path));
  if (startIndex === nums.length) {
    return;
  }
  for (let i = startIndex; i < nums.length; i++) {
    if (i > startIndex && nums[i] === nums[i - 1]) {
      continue;
    }
    path.push(nums[i]);
    backtracking(nums, i + 1);
    path.pop();
  }
}
