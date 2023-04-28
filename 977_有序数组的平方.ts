function sortedSquares2(nums: number[]): number[] {
  // 暴力平方... 效果极差
  nums = nums.map((item) => item * item);
  let current: number;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        current = nums[i];
        nums[i] = nums[j];
        nums[j] = current;
      }
    }
  }
  return nums;
}

function sortedSquares(nums: number[]): number[] {
  // 双指针    空间换时间
  let result: number[] = [];
  let k = nums.length - 1;
  for (let left = 0, right = nums.length - 1; left <= right; ) {
    if (double(nums[left]) > double(nums[right])) {
      result[k] = double(nums[left]);
      left++;
    } else {
      result[k] = double(nums[right]);
      right--;
    }
    k--;
  }
  return result;
}

function double(num: number): number {
  return num * num;
}

console.log(sortedSquares([-4, -1, 0, 3, 10]));
