/**
 * @param {number[]} nums
 * @return {number[][]}
 */

let path = [];
let result = [];
var subsets = function (nums) {
  result = [];
  backtracking(nums, 0);
  return result;
};

function backtracking(nums, startIndex) {
  result.push([...path]);
  if (startIndex >= nums.length) {
    return;
  }
  for (let i = startIndex; i < nums.length; i++) {
    path.push(nums[i]);
    backtracking(nums, i + 1);
    path.pop();
  }
}

console.log(subsets([1, 2, 3]));
