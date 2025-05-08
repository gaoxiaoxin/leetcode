/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let sum = 0;
  let left = 0;
  let right = 0;
  let minWidth = Infinity;
  while (right < nums.length) {
    // 在这里将要进入窗口的值塞入
    sum += nums[right];
    while (sum >= target) {
      minWidth = Math.min(minWidth, right - left + 1);
      sum -= nums[left];
      left++;
    }
    right++;
  }
  return minWidth === Infinity ? 0 : minWidth;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
