/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function (mat, k) {
  const m = mat.length;
  const n = mat[0].length;
  if (m === 0 || n === 0) return [];
  const preSum = Array.from(
    {
      length: m + 1,
    },
    () => Array(n + 1).fill(0)
  );
  // 构造前缀和数组
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      preSum[i][j] =
        preSum[i - 1][j] +
        preSum[i][j - 1] +
        mat[i - 1][j - 1] -
        preSum[i - 1][j - 1];
    }
  }
  console.log(preSum);

  const result = Array.from(
    {
      length: m,
    },
    () => Array(n).fill(0)
  );

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 输出边界值， 如果超出0、0、m、n 则以边界值为主
      const [row1, col1, row2, col2] = getPath(i, j, k, m, n);
      result[i][j] =
        preSum[row2 + 1][col2 + 1] -
        preSum[row1][col2 + 1] -
        preSum[row2 + 1][col1] +
        preSum[row1][col1];
    }
  }

  return result;
};

const getPath = (i, j, k, m, n) => {
  const row1 = i - k >= 0 ? i - k : 0;
  const col1 = j - k >= 0 ? j - k : 0;
  const row2 = i + k <= m - 1 ? i + k : m - 1;
  const col2 = j + k <= n - 1 ? j + k : n - 1;
  return [row1, col1, row2, col2];
};

console.log(
  matrixBlockSum(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    1
  )
);
