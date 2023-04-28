function exchange(nums: number[]): number[] {
  if (nums.length === 0 || nums.length === 1) return nums;
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    if (nums[left] % 2 === 0) {
      if (nums[right] % 2 === 1) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
      } else {
        right--;
      }
    } else {
      left++;
    }
  }
  return nums;
}

console.log(exchange([1, 2, 3, 4, 5, 6, 7, 8]));
