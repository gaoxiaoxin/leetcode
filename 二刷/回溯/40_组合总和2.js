/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
let result = [];
let path = [];
let used = [];
let sum = 0;
var combinationSum2 = function (candidates, target) {
    result = [];
    candidates.sort((a, b) => (a - b));
    backtracking(candidates, target, sum, 0);
    return result;
};


function backtracking(candidates, target, sum, startIndex) {
    if (sum > target) {
        return;
    }
    if (sum === target) {
        result.push([...path]);
        return;
    }
    for (let i = startIndex; i < candidates.length; i++) {
        if (i > startIndex && candidates[i] === candidates[i - 1]) {
            continue;
        }
        path.push(candidates[i]);
        used[i] = true;
        backtracking(candidates, target, sum + candidates[i], i + 1);
        used[i] = false;
        path.pop()
    }
}

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));