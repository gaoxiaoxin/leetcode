/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */

let result = [];
let path = [];

var combinationSum3 = function (k, n) {
  result = [];
  backtracking(9, k, n, 0, 1);
  return result;
};

function backtracking(n, k, target, sum, startIndex) {
  if (sum > target) {
    return;
  }
  if (sum === target && path.length === k) {
    result.push([...path]);
  }
  for (let i = startIndex; i <= n; i++) {
    path.push(i);
    backtracking(n, k, target, sum + i, i + 1);
    path.pop();
  }
}

console.log(combinationSum3(3, 9));
