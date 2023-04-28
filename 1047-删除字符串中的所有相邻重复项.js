// 递归
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  let stack = [];
  for (v of s) {
    let prev = stack.pop();
    if (prev != v) {
      stack.push(prev);
      stack.push(v);
    }
  }
  return stack.join("");
};

console.log(removeDuplicates("abbbaca"));
