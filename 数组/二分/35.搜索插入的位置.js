/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let width = nums.length - 1;
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    width = Math.floor(left + (right - left) / 2);
    if (nums[width] > target) {
      right = width - 1;
    } else if (nums[width] < target) {
      left = width + 1;
    } else {
      return width;
    }
  }
  return right + 1;
};
