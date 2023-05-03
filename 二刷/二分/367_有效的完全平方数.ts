function isPerfectSquare(num: number): boolean {
  let left: number = 1;
  let right: number = num;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (num / middle > middle) {
      left = middle + 1;
    } else if (num / middle < middle) {
      right = middle - 1;
    } else {
      return middle * middle === num;
    }
  }
  return false;
}

/* 
    通过二分法, 不断去逼近目标值的开平方。
*/
