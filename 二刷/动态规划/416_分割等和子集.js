var canPartition = function (nums) {
  let sums = 0;
  nums.forEach((item) => {
    sums += item;
  });
  if (sums % 2 === 1) return false;
  let target = sums / 2;
  console.log(target);
  const dp = Array(nums.length)
    .fill()
    .map((item) => Array(target + 1).fill(0));
  for (let i = 1; i < dp[0].length; i++) {
    if (nums[0] > 1) {
      dp[0][i] = 0;
    } else {
      dp[0][i] = nums[0];
    }
  }
  for (let i = 1; i < nums.length; i++) {
    for (let j = 1; j < dp[0].length; j++) {
      if (nums[i] > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j - nums[i]] + nums[i], dp[i - 1][j]);
      }
    }
  }
  //   console.log(dp);
  return dp[nums.length - 1][target] === target;
};

console.log(canPartition([1, 5, 11, 5, 4]));
console.log(canPartition([3, 3, 3, 4, 5]));
console.log(canPartition([2, 2, 1, 1]));
