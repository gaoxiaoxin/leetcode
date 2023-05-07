function generateMatrix(n: number): number[][] {
  let res: number[][] = new Array(n).fill(1).map((i) => new Array(n));
  let loopNum = Math.floor(n / 2);
  let offset = 1;
  let count = 1;
  let startX = 0;
  let startY = 0;
  while (loopNum--) {
    let x = startX;
    let y = startY;
    for (; x < n - offset; x++) {
      res[y][x] = count++;
    }
    for (; y < n - offset; y++) {
      res[y][x] = count++;
    }
    for (; x >= offset; x--) {
      res[y][x] = count++;
    }
    for (; y >= offset; y--) {
      res[y][x] = count++;
    }
    console.log(res);

    offset++;
    startX++;
    startY++;
  }
  if (n % 2 === 1) {
    res[startX][startY] = count;
  }
  return res;
}

console.log(generateMatrix(4));

/* 
1. 循环不变量
2. 一个处理原则 左闭右开
3. 学会处理边界情况
4. 如何判断循环条件
*/
