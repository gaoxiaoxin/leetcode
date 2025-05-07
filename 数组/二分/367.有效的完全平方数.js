/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let l = 0;
  let r = num;

  while (l <= r) {
    const mid = Math.floor(l + (r - l) / 2);
    if (mid * mid === num) {
      return true;
    } else if (mid * mid < num) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return false;
};
