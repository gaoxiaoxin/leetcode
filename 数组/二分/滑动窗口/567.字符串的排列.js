/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// 判断S2中是否含有S1的子串
var checkInclusion = function (s1, s2) {
  let s1Set = {};
  let s2Set = {};
  for (let key of s1) {
    s1Set[key] = (s1Set[key] || 0) + 1;
  }
  let len = Infinity;
  let left = 0;
  let right = 0;
  let valid = 0;
  while (right < s2.length) {
    let rightItem = s2[right];
    right++;
    if (s1Set[rightItem]) {
      s2Set[rightItem] = (s2Set[rightItem] || 0) + 1;
      if (s2Set[rightItem] === s1Set[rightItem]) {
        valid++;
      }
    }
    while (valid === Object.keys(s1Set).length) {
      if (right - left < len) {
        len = right - left;
      }
      let leftItem = s2[left];
      left++;
      if (s1Set[leftItem]) {
        if (s1Set[leftItem] === s2Set[leftItem]) {
          valid--;
        }
        s2Set[leftItem]--;
      }
    }
  }
  return len === Infinity ? false : len === s1.length;
};
