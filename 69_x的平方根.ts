function mySqrt(x: number): number {
  if (x < 2) return x;
  let min = 1;
  let max = x;
  let current: number = 0;
  while (min < max) {
    current = Math.floor((max + min) / 2);
    if (x / current < current) {
      max = current;
    } else if (x / current > current) {
      min = current + 1;
    } else {
      return current;
    }
  }
  return max - 1;
}

console.log(mySqrt(15));
