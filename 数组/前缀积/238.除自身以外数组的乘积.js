/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  // 前缀积
  const prefix = new Array(nums.length + 1);
  prefix[0] = [1];
  for (let i = 0; i < nums.length; i++) {
    prefix[i + 1] = prefix[i] * nums[i];
  }
  // 后缀积
  const suffix = new Array(nums.length + 1);
  suffix[nums.length] = [1];
  for (let i = nums.length - 1; i >= 0; i--) {
    suffix[i] = suffix[i + 1] * nums[i];
  }
  // 结果数组
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix[i] * suffix[i + 1];
  }
  return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
