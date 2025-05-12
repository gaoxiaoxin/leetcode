/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  const result = [];
  for (let i = 0; i < matrix.length; i++) {
    let l = [0];
    for (let j = 0; j < matrix[i].length; j++) {
      l[j + 1] = matrix[i][j] + l[j];
    }
    result.push(l);
  }
  this.value = result;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  let sum = 0;
  for (let i = row1; i <= row2; i++) {
    const subSum = this.value[i][col2 + 1] - this.value[i][col1];
    sum += subSum;
  }

  return sum;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

var obj = new NumMatrix([
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5],
]);
console.log(obj.sumRegion(2, 1, 4, 3));
