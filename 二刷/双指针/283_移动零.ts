/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let left = 0;
    let right = 0;
    while (right < nums.length) {
        if (nums[right] !== 0) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++
        } 
        right++
    }
}
/**
 * 使用快慢指针， 快指针去找不等于0的元素，和等于0的元素进行交换。
 * 
 */



