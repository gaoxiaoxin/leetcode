/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let cover = 0;
  for (let i = 0; i <= cover; i++) {
    cover = Math.max(nums[i] + i, cover);
    if (cover === nums.length - 1) return true;
  }
  return false;
};

console.log(canJump([2, 3, 1, 1, 4]));
