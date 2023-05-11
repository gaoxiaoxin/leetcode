function removeDuplicates(nums: number[]): number {
  if (nums.length === 0 || nums.length === 1) return nums.length;
  let left = 0;
  let right = 1;
  while (right < nums.length) {
    if (nums[left] === nums[right]) {
      right++;
    } else {
      nums[left + 1] = nums[right];
      left++;
      right++;
    }
  }
  return left + 1;
}


export {}