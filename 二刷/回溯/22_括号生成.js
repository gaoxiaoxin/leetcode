/**
 * @param {number} n
 * @return {string[]}
 */
let result = [];
let path = [];
let left = 0;
let right = 0;
var generateParenthesis = function (n) {
    result = [];
    backtracking(n);
    return result;
};

function backtracking(n) {
    if (left > n) {
        return;
    }
    if (right > left) {
        return;
    }
    if (left === right === n) {
        result.push(path.join(''))
        return;
    }
    for (let i = left; i < n; i++) {
        path.push('(');
        backtracking(n);
        path.push(')')
    }
}