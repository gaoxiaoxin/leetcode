function minSubArrayLen(target: number, nums: number[]): number {
  // 使用滑动窗口的思想
  // 滑动窗口的关键核心在于, for循环的那个指针到底是起始指针还是终点指针
  // 答案，终点指针
  let left = 0; // 起始指针
  let result: number = nums.length + 1; // 最后的返回值, 初始值给一个最大值, 要大于原有数组的大小, 防止给定的数组中所以数加起来小于target
  let sum: number = 0;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum >= target) {
      result = Math.min(right - left + 1, result);
      sum -= nums[left];
      left++;
    }
  }
  return result === nums.length + 1 ? 0 : result; // 如果相等，说明加起来都没target大。
}
