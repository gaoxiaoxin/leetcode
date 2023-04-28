function longestPalindrome(s: string): string {
  if (s.length === 0 || s.length === 1) return s;
  let str: string = "";
  let left: number = 0;
  let right: number = 1;
  while (right < s.length || left++ < s.length) {
    console.log("right.length", right);
    if (s[left] === s[right]) {
      let currentLeft = left;
      let currentRight = right;
      while (currentLeft <= currentRight) {
        console.log("left", s[currentLeft], "right", s[currentRight]);
        if (s[currentLeft] === s[currentRight]) {
          break;
        } else {
          currentLeft++;
          currentRight--;
        }
      }
      str = str.length > right - left ? str : s.slice(left, right + 1);
      left++;
      right = left;
      console.log("str", str);
    } else {
      right++;
    }
  }
  return str;
}

console.log(1, longestPalindrome("cbbd"));
