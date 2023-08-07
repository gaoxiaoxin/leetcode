/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

// 回溯，就是一棵棵的向下种树，然后再回来
let result = [];
let path = [];
var combine = function (n, k) {
    result = []
    backtracking(n, k, 1);
    return result;
};

function backtracking(n, k, startIndex) {
    if (path.length === k) {
        result.push([...path]);
        return;
    }
    for (let i = startIndex; i <= n; i++) {
        path.push(i);
        backtracking(n, k, i + 1);
        path.pop();
    }
}

