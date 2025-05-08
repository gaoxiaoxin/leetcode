/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let set = {};
  let maxLen = 0;
  let left = 0;
  let right = 0;
  let valid = 0;
  while (right < fruits.length) {
    let rightFruit = fruits[right];
    right++;

    if (!set[rightFruit]) {
      set[rightFruit] = (set[rightFruit] || 0) + 1;
      valid++;
    } else {
      set[rightFruit]++;
    }

    while (valid === 2 && !set[fruits[right]]) {
      if (right - left > maxLen) {
        maxLen = right - left;
      }
      let leftFruit = fruits[left];
      left++;

      if (set[leftFruit]) {
        set[leftFruit]--;
      }

      if (set[leftFruit] === 0) {
        valid--;
      }
    }
  }
  return maxLen === 0 ? right - left : maxLen;
};
