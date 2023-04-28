function findNumberIn2DArray(matrix: number[][], target: number): boolean {
  if (matrix.length === 0) return false;
  let m = matrix.length;
  let n = matrix[0].length;
  let left = 0,
    right = n - 1,
    top = 0,
    bottom = m - 1;
  while (left <= right && top <= bottom) {
    for (let i = left; i <= right && top <= bottom; i++) {
      if (matrix[top][i] === target) {
        return true;
      }
    }
    top++;
    for (let i = top; i <= bottom && left <= right; i++) {
      if (matrix[i][right] === target) {
        return true;
      }
    }
    right--;
    for (let i = right; i >= left && top <= bottom; i--) {
      if (matrix[bottom][i] === target) {
        return true;
      }
    }
    bottom--;
    for (let i = bottom; i >= top && left <= right; i--) {
      if (matrix[left][i] === target) {
        return true;
      }
    }
  }
  return false;
}

let matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];

console.log(findNumberIn2DArray(matrix, 5));
export {};
