/**
 * @param {number[]} nums
 * @return {number[][]}
 */

let result = [];
let path = [];
var subsets = function (nums) {
    result = [];
    for (let i = 0; i <= nums.length; i++) {
        backtracking(nums, i, 0)
    }

    return result;
};

function backtracking(nums, n, startIndex) {
    if (path.length === n) {
        result.push([...path]);
        return;
    }
    for (let i = startIndex; i < nums.length; i++) {
        path.push(nums[i]);
        backtracking(nums, n, i + 1);
        path.pop()
    }
}

