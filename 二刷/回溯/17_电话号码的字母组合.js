/**
 * @param {string} digits
 * @return {string[]}
 */

let map = [null, null, "abc", "def", "ghj", "jkl", "mno", "pqs", "tuv", "wxyz"];
let result = [];
let path = [];
var letterCombinations = function (digits) {
  if (digits.length === 0) return result;
  result = [];
  backtracking(digits, 0);
  return result;
};

function backtracking(digits, startIndex) {
  if (path.length === digits.length) {
    result.push(path.join(""));
    return;
  }
  for (let i = 0; i < map[digits[startIndex]].length; i++) {
    path.push(map[digits[startIndex]][i]);
    backtracking(digits, startIndex + 1);
    path.pop();
  }
}
console.log(letterCombinations(""));
