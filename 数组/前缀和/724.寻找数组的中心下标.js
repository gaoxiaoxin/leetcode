/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  // 构建数组前缀和
  const preSum = [0];

  for (let i = 0; i < nums.length; i++) {
    preSum[i + 1] = preSum[i] + nums[i];
  }
  const totalSum = preSum[preSum.length - 1];
  for (let i = 1; i <= preSum.length; i++) {
    if (totalSum - preSum[i] === preSum[i - 1]) {
      return i - 1;
    }
  }
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
