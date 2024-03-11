exports;
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

let result = [];
let path = [];

var combine = function (n, k) {
  backtracking(n, k, 1);
  return result;
};

function backtracking(n, k, startIndex) {
  if (path.length === k) {
    return result.push([...path]);
  }
  for (let i = startIndex; i <= n - (k - path.length) + 1; i++) {
    path.push(i);
    backtracking(n, k, i + 1);
    path.pop();
  }
}
console.log(combine(1, 1));
