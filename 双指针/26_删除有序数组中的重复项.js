/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) return [];
  let target = null;
  let left = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== target) {
      nums[left] = nums[i];
      left++;
      target = nums[i];
    }
  }
  return left;
};
