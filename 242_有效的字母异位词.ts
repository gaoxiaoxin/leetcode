function isAnagram(s: string, t: string): boolean {
  let AisNum: number[] = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0,
  ];
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    AisNum[s[i].charCodeAt(0) - "a".charCodeAt(0)]++;
    AisNum[t[i].charCodeAt(0) - "a".charCodeAt(0)]--;
  }
  for (let i = 0; i < AisNum.length; i++) {
    if (AisNum[i] !== 0) {
      return false;
    }
  }
  return true;
}
