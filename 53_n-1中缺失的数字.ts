function missingNumber(nums: number[]): number | undefined {
  for (let i = 0; i <= nums.length; i++) {
    if (i !== nums[i]) {
      return i;
    }
  }
}
