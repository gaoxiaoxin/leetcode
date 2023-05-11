function removeDuplicates(nums: number[]): number {
    if (nums.length === 0 || nums.length === 1) return nums.length;
    let right = 2;
    for (let i = 2; i < nums.length; i++) {
        if (nums[right - 2] === nums[i]) {
            
        } else {
            nums[right] = nums[i];
            right++
        }
    }
    return right
  }
  
const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
export { }
/**
 * 因为要判断元素是否只出现了两次
 * 那么right-2，判断快指针元素是否等于慢指针的前两位
 * 如果等于，那说明现在快指针指向的元素，是不合格数据。
 * 就跳过，等后面用正式数据来覆盖
 * 
 */
