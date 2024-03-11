/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
let result = [];
let path = [];
var combinationSum2 = function (candidates, target) {
  result = [];
  candidates.sort((x, y) => x - y);
  backtracking(candidates, 0, target, 0);
  return result;
};

function backtracking(candidates, sum, target, startIndex) {
  if (sum === target) {
    result.push(Array.from(path));
    return;
  }
  for (let i = startIndex; i < candidates.length; i++) {
    if (i > startIndex && candidates[i] === candidates[i - 1]) {
      continue;
    }
    if (candidates[i] > target - sum) {
      break;
    }
    path.push(candidates[i]);
    backtracking(candidates, sum + candidates[i], target, i + 1);
    path.pop();
  }
}
