function spiralOrder(matrix: number[][]): number[] {
  let res: number[] = [];
  let top = 0;
  let left = 0;
  let m = matrix[0].length;
  let n = matrix.length;
  let right = m - 1;
  let bottom = n - 1;
  while (res.length < m * n) {
    for (let i = left; i <= right && top <= bottom; i++) {
      res.push(matrix[top][i]);
    }
    top++;
    for (let i = top; i <= bottom && left <= right; i++) {
      res.push(matrix[i][right]);
    }
    right--;
    for (let i = right; i >= left && top <= bottom; i--) {
      res.push(matrix[bottom][i]);
    }
    bottom--;
    for (let i = bottom; i >= top && left <= right; i--) {
      res.push(matrix[i][left]);
    }
    left++;
  }

  return res;
}

const matrix = [
  [2, 3, 4],
  [5, 6, 7],
  [8, 9, 10],
  [11, 12, 13],
  [14, 15, 16],
];

console.log(spiralOrder(matrix));
