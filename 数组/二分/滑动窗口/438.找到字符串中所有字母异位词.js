/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let need = {};
  let window = {};
  for (let item of p) {
    need[item] = (need[item] || 0) + 1;
  }
  let left = 0;
  let right = 0;
  let valid = 0;
  const result = [];
  while (right < s.length) {
    let rightItem = s[right];
    right++;
    if (need[rightItem]) {
      window[rightItem] = (window[rightItem] || 0) + 1;
      if (window[rightItem] === need[rightItem]) {
        valid++;
      }
    }
    while (valid === Object.keys(need).length) {
      if (right - left === p.length) {
        result.push(left);
      }
      let leftItem = s[left];
      left++;
      if (need[leftItem]) {
        if (window[leftItem] === need[leftItem]) {
          valid--;
        }
        window[leftItem]--;
      }
    }
  }

  return result;
};
