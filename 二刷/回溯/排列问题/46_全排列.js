/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let result = [];
let path = [];
let uset = [];
var permute = function (nums) {
  let len = nums.length;
  result = [];
  backtracking(nums, len);
  return result;
};

function backtracking(nums, len) {
  if (path.length === len) {
    return result.push(Array.from(path));
  }
  for (let i = 0; i < len; i++) {
    if (uset[i]) continue;
    path.push(nums[i]);
    uset[i] = true;
    backtracking(nums, len);
    path.pop();
    uset[i] = false;
  }
}

console.log(permute([1, 2, 3]));
