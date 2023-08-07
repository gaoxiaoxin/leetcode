/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
let result = [];
let path = [];
let sum = 0;
var combinationSum3 = function (k, n) {
    result = [];
    backtracking(k, n, 1);
    return result;
};


var backtracking = function (k, n, startIndex) {
    if (sum > n) {
        return;
    }
    if (path.length === k) {
        if (sum === n) {
            result.push([...path]);
        }
        return;
    }
    for (let i = startIndex; i <= (9 - (k - path.length) + 1); i++) {
        path.push(i);
        sum += i;
        backtracking(k, n, i + 1);
        sum -= i;
        path.pop();
    }
}
