/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  const result = [];
  while (left <= right) {
    const doubleLeft = nums[left] * nums[left];
    const doubleRight = nums[right] * nums[right];

    if (doubleLeft > doubleRight) {
      result.unshift(doubleLeft);
      left++;
    } else {
      result.unshift(doubleRight);
      right--;
    }
  }
  return result;
};
