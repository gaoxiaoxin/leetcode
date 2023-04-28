function spiralOrder(matrix: number[][]): number[] {
  let res: number[] = [];
  let m = matrix.length;
  let n = matrix[0].length;
  let top = 0;
  let left = 0;
  let bottom = m - 1;
  let right = n - 1;
  while (left <= right && top <= bottom) {
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

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(spiralOrder(matrix));
