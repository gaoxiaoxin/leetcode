function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  //   [left, right]
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (nums[middle] > target) {
      right = middle - 1;
    } else if (nums[middle] < target) {
      left = middle + 1;
    } else {
      return middle;
    }
  }
  return -1;
}

function search2(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length;

  // [left, right)
  while (left < right) {
    let middle = Math.floor((left + right) / 2);
    if (nums[middle] > target) {
      right = middle;
    } else if (nums[middle] < target) {
      left = middle + 1;
    } else {
      return middle;
    }
  }
  return -1;
}

console.log(search2([-1, 0, 3, 5, 9, 12], 9));
