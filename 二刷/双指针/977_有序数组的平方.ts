function sortedSquares(nums: number[]): number[] {
  // 双指针
  let result: number[] = [];
  let right = nums.length - 1;
  let left = 0;
  while (left <= right) {
    let doubleLeft = double(nums[left]);
    let doubleRight = double(nums[right]);
    if (doubleLeft > doubleRight) {
      result.unshift(doubleLeft);
      left++;
    } else {
      result.unshift(doubleRight);
      right--;
    }
  }
  return result;
}

function double(num: number): number {
  return num * num;
}

let nums = [-4, -1, 0, 3, 10];

console.log(sortedSquares(nums));

/**
 * 方法一:
 * 简单粗暴的将代码的平方依次插入,然后使用  sort进行排序。
 * 方法二:
 * 使用双指针法, 因为是一个递增数列, 那么最大的一定就在头部和尾部。所以，依次对比头部和尾部元素，找到值最大的那个插入新数组。
 */
