// 普通解法
function searchInsert2(nums: number[], target: number): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length;
}
// 二分法
function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length;
  let middle;
  while (left < right) {
    middle = Math.floor((left + right) / 2);
    if (nums[middle] > target) {
      right = middle;
    } else if (nums[middle] < target) {
      left = middle + 1;
    } else {
      return middle;
    }
  }
  return right;
}

export {};
