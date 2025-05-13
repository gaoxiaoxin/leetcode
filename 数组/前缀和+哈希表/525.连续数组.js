/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  let n = nums.length;
  const preSum = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    preSum[i + 1] = preSum[i] + (nums[i] === 0 ? -1 : 1);
  }
  const valToIndex = new Map();
  let res = 0;
  for (let i = 0; i < preSum.length; i++) {
    // 如果这个前缀和没有对应的索引，那么锁门第一次出现，记录下来
    if (!valToIndex.has(preSum[i])) {
      valToIndex.set(preSum[i], i);
    } else {
      res = Math.max(res, i - valToIndex.get(preSum[i]));
    }
  }
  return res;
};
