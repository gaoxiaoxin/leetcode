/**
 * @param {number[]} nums
 * @return {number[][]}
 */

let result = [];
let path = [];
let used = [];
var permute = function (nums) {
    result = [];
    backtracking(nums);
    return result;
};


function backtracking(nums) {
    if (path.length === nums.length) {
        result.push([...path]);
        return;
    }
    for (let i = 0; i < nums.length; i++) {
        if (used[i]) {
            continue;
        }
        path.push(nums[i]);
        used[i] = true;
        backtracking(nums);
        used[i] = false;
        path.pop();
    }
}


console.log(permute([1, 2, 3]));

