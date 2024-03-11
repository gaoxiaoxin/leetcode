/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
let result = [];
let path = [];
let sum = 0;
var combinationSum = function (candidates, target) {
  result = [];
  backtracking(candidates, target, sum, 0);
  return result;
};

function backtracking(candidates, target, sum, startIndex) {
  if (sum > target) {
    return;
  }
  if (sum === target) {
    result.push([...path]);
    return;
    l;
  }
  for (let i = startIndex; i < candidates.length; i++) {
    path.push(candidates[i]);
    backtracking(candidates, target, sum + candidates[i], i);
    path.pop();
  }
}

console.log(combinationSum([2, 3, 6, 7], 7));
