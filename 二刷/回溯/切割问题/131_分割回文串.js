/**
 * @param {string} s
 * @return {string[][]}
 */

let path = [];
let result = [];
var partition = function (s) {
  result = [];
  backtracking(s, 0);
  return result;
};

function backtracking(s, startIndex) {
  if (startIndex >= s.length) {
    result.push([...path]);
    return;
  }
  for (let i = startIndex; i <= s.length; i++) {
    if (!isPalindrome(s, startIndex, i)) {
      continue;
    }
    path.push(s.slice(startIndex, i + 1));
    backtracking(s, i + 1);
    path.pop();
  }
}

function isPalindrome(s, startIndex, endIndex) {
  for (let i = startIndex, j = endIndex; i < j; i++, j--) {
    if (s[i] !== s[j]) {
      return false;
    }
  }
  return true;
}
