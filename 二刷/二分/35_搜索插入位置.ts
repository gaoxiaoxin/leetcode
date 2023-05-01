function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length;
  while (left < right) {
    const middle = Math.floor((left + right) / 2);
    if (target > nums[middle]) {
      left = middle + 1;
    } else if (target < nums[middle]) {
      right = middle;
    } else {
      return middle;
    }
  }
  return right;
}
