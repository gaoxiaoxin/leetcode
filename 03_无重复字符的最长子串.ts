function lengthOfLongestSubstring(s: string): number {
  let set = new Set<string>();
  let result = 0;
  let left = 0;
  // i 作为一个指针
  for (let i = 0; i < s.length; i++) {
    if (!set.has(s[i])) {
      set.add(s[i]);
    } else {
      // 如果有, 那么说明,现在就有了重复字符
      // 将最大的无重复字符进行保存
      result = Math.max(set.size, result);
      while (left <= i) {
        if (s[left] !== s[i]) {
          set.delete(s[left]);
          left++;
        } else {
          left++;
          break;
        }
      }
      set.add(s[i]);
    }
  }
  result = Math.max(set.size, result);
  return result;
}

console.log(lengthOfLongestSubstring("aabaab!bb"));
