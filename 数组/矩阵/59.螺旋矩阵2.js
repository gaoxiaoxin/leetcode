/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  if (n === 0) return [];
  const result = new Array(n).fill(0).map(() => new Array(n).fill(0));
  // 左闭右开
  let start = 0;
  let end = n - 1;
  let all = n * n;
  let dee = 1;
  while (all) {
    if (start === end) {
      result[start][end] = dee;
      all--;
    }

    // 上
    for (let i = start; i < end; i++) {
      result[start][i] = dee++;
      all--;
    }

    // 右
    for (let i = start; i < end; i++) {
      result[i][end] = dee++;
      all--;
    }

    // 下
    for (let i = end; i > start; i--) {
      result[end][i] = dee++;
      all--;
    }

    // 左
    for (let i = end; i > start; i--) {
      result[i][start] = dee++;
      all--;
    }

    start++;
    end--;
  }

  return result;
};
