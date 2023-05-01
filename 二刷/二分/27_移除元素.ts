function removeElement(nums: number[], val: number): number {
  let slow = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[slow] = nums[i];
      slow++;
    }
  }
  return slow;
}

/* 
对于该题，讲究一个原地去除元素, 其实就是将后面的元素移动到前面。

使用快慢指针, 使用快指针去找那个元素不是对应给定的那个数值. 如果不是那个数值, 那么就让快指针指向的那个数值, 赋值给慢指针指向的那个数值。
返回慢指针指向的那个数组。
*/
