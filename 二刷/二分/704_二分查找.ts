function search(nums: number[], target: number): number {
  // [left, right]
  //   let left = 0;
  //   let right = nums.length - 1;
  //   while (left <= right) {
  //     const middle = Math.floor((left + right) / 2);
  //     if (target > nums[middle]) {
  //       left = middle + 1;
  //     } else if (target < nums[middle]) {
  //       right = middle - 1;
  //     } else {
  //       return middle;
  //     }
  //   }
  //   return -1;
  // [left ,right)
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
  return -1;
}

const nums: number[] = [-1, 0, 3, 5, 9, 12];

console.log(search(nums, 12));
