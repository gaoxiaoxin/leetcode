/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
let result = [];
let path = [];
var fourSum = function (nums, target) {
  result = [];
  backtracking(4, nums, 0, 0, target);
  return result;
};

/**
 * @param {number} n 限制条件
 */
function backtracking(n, nums, startIndex, sum, target) {
  if (path.length === n) {
    if (sum === target) {
      result.push([...path]);
    }
    let flag = true;
    for (let i = 0; i < result.length; i++) {
        flag = true;
        let index = 0
        for (let j = 1; j < result.length; j++) { 
            index = j;
            if(result[i] === result[j])
        }
        if(flag)
    }
    return;
  }
  for (let i = startIndex; i < nums.length; i++) {
    path.push(nums[i]);
    backtracking(n, nums, i + 1, sum + nums[i], target);
    path.pop();
  }
}

let nums = [1, 0, -1, 0, -2, 2];
console.log(fourSum(nums, 0));

console.log(
  new Set([
    [2, 2, 2, 2],
    [2, 2, 2, 2],
    [2, 2, 2, 2],
    [2, 2, 2, 2],
    [2, 2, 2, 2],
  ])
);
