/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const need = {};
  const window = {};
  for (let c of t) {
    need[c] = (need[c] || 0) + 1;
  }
  let len = Infinity;
  let left = 0;
  let right = 0;
  let start = 0;
  let valid = 0;
  while (right < s.length) {
    // 对要加入窗口的元素进行操作
    const rightItem = s[right];
    right++;
    if (need[rightItem]) {
      window[rightItem] = (window[rightItem] || 0) + 1;
      if (window[rightItem] === need[rightItem]) {
        valid++;
      }
    }
    while (valid === Object.keys(need).length) {
      if (right - left < len) {
        len = right - left;
        start = left;
      }
      let leftItem = s[left];
      left++;
      if (need[leftItem]) {
        if (need[leftItem] === window[leftItem]) {
          valid--;
        }
        window[leftItem]--;
      }
    }
  }
  return len === Infinity ? "" : s.slice(start, start + len);
};

console.log(minWindow("ADOBECODEBANC", "ABC"));
