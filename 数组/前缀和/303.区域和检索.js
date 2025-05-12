/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  const preArray = [0];
  nums.forEach((item, index) => {
    preArray[index + 1] = preArray[index] + nums[index];
  });

  this.preArray = preArray;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.preArray[right + 1] - this.preArray[left];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
