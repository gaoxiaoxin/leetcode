/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  const dp = Array(n + 1).fill(null);
  dp[2] = 1;
  for (let i = 3; i <= n; i++) {
    for (let j = 1; j <= i / 2; j++) {
      dp[i] = Math.max(dp[i], Math.max((i - j) * j, dp[i - j] * j));
    }
  }
  return dp[n];
};

console.log(integerBreak(10));
