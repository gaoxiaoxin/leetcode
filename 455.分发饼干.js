/**
 * @param {number[]} g  胃口
 * @param {number[]} s  饼干
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let result = 0;
  let sIndex = s.length - 1;
  for (let i = g.length - 1; i >= 0; i--) {
    if (sIndex >= 0 && s[sIndex] >= g[i]) {
      result++;
      sIndex--;
    }
  }
  return result;
};

console.log(findContentChildren([1, 2, 3], [1, 2]));
