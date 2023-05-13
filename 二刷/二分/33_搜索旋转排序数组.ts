function search(nums: number[], target: number): number {
  if (nums.length < 2) {
    if (nums[0] == target) {
      return 0;
    } else {
      return -1;
    }
  }
  let curNum: number = nums[0];
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mod = left + Math.floor((right - left) / 2);
    if (nums[mod] == target) {
      return mod;
    } else if (nums[mod] < nums[right]) {
      if (nums[mod] < target && target <= nums[right]) left = mod + 1;
      else right = mod - 1;
    } else {
      if (nums[left] <= target && target < nums[mod]) right = mod - 1;
      else left = mod + 1;
    }
  }
  return -1;
}

/* 
因为之前是升序排列, 那么在进行旋转之后，最大值将会挨着最小值

*/

let nums = [1, 3],
  target = 1;

console.log(search(nums, target));

export {};
