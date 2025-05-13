/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  const n = nums.length;
  let preSum = [0];
  for (let i = 0; i < nums.length; i++) {
    preSum[i + 1] = preSum[i] + nums[i];
  }
  let set = new Map();
  for (let i = 0; i < preSum.length; i++) {
    let val = preSum[i] % k;
    if (!set.has(val)) {
      set.set(val, i);
    } else {
      if (i - set.get(val) >= 2) {
        return true;
      }
    }
  }
  return false;
};

console.log(checkSubarraySum([23, 2, 6, 4, 7], 6));
