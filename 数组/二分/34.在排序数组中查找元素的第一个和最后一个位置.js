/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if (!nums.length) return [-1, -1];
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] === target) {
      let tragetLeft = mid;
      let targetRight = mid;
      while (nums[tragetLeft] === target) {
        tragetLeft--;
      }
      while (nums[targetRight] === target) {
        targetRight++;
      }
      return [tragetLeft + 1, targetRight - 1];
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return [-1, -1];
};
