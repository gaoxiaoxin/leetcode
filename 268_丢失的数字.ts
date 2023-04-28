function missingNumber(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let i = 0;
  while (i === nums[i]) {
    i++;
  }
  return i;
}

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
