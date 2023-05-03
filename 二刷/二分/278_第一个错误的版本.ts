/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {
  return function (n: number): number {
    if (n <= 1) return n;
    let left = 0;
    let right = n;
    let bad = 0;
    while (left < right) {
      let middle = Math.floor((left + right) / 2);
      if (!isBadVersion(middle)) {
        left = middle + 1;
      } else {
        right = middle;
      }
    }
    return bad;
  };
};
