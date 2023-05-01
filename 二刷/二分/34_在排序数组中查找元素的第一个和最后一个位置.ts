function searchRange(nums: number[], target: number): number[] {
  let rightBorder = getRightBorder(nums, target);
  let leftBorder = getLeftBorder(nums, target);
  console.log(rightBorder, leftBorder);

  if (rightBorder == -2 || leftBorder == -2) return [-1, -1];
  if (rightBorder > leftBorder) return [leftBorder + 1, rightBorder - 1];

  return [-1, -1];
}

function getLeftBorder(nums: number[], target: number) {
  let left = 0;
  let right = nums.length - 1;
  let leftBorder = -2;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (nums[middle] >= target) {
      right = middle - 1;
      leftBorder = right;
    } else {
      left = middle + 1;
    }
  }
  return leftBorder;
}

function getRightBorder(nums: number[], target: number) {
  let left = 0;
  let right = nums.length - 1;
  let rightBorder = -2;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (nums[middle] <= target) {
      left = middle + 1;
      rightBorder = left;
    } else {
      right = middle - 1;
    }
  }
  return rightBorder;
}
/* 
思路: 二分法分前后和后面，使用两个二分法，去查找左半和右半。
对左半和右半分别进行二分法, [left, right]
- 对于左半，去找要寻找的数值的左边界, 在数值大于nums[middle]的时候将left的数值设为 middle - 1, 不断的缩小范围.
在小于等于的时候, 将 right 设置为 left + 1;
那么在不断的改变范围的时候, 就会出现对的边界

- 对于右半则同理。
*/

searchRange([5, 7, 7, 8, 8, 10], 8);
