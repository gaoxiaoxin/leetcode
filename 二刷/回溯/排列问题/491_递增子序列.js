/**
 * @param {number[]} nums
 * @return {number[][]}
 */

let result = [];
let path = [];
var findSubsequences = function (nums) {
  result = [];
  backtracking(nums, 0);
  return result;
};

function backtracking(nums, startIndex) {
  if (path.length >= 2) {
    result.push(Array.from(path));
  }
  if (startIndex === nums.length) return;
  let used = [];
  for (let i = startIndex; i < nums.length; i++) {
    if ((path.length > 0 && nums[i] < nums[i - 1]) || used[nums[i] + 100]) {
      continue;
    }
    used[nums[i] + 100] = true;
    path.push(nums[i]);
    backtracking(nums, i + 1);
    path.pop();
  }
}

console.log(findSubsequences([4, 4, 3, 2, 1]));
