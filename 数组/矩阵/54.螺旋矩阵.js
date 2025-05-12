/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const result = [];
  let left = 0;
  let right = n - 1;
  let top = 0;
  let bottom = m - 1;

  while (left < right && top < bottom) {
    for (let i = left; i < right; i++) {
      result.push(matrix[top][i]);
    }

    for (let i = top; i < bottom; i++) {
      result.push(matrix[i][right]);
    }

    for (let i = right; i > left; i--) {
      result.push(matrix[bottom][i]);
    }
    for (let i = bottom; i > top; i--) {
      result.push(matrix[i][left]);
    }
    right--;
    top++;
    bottom--;
    left++;
  }

  if (top === bottom) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
  } else if (left === right) {
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][left]);
    }
  }

  return result;
};

console.log(spiralOrder([[7], [9], [6]]));
