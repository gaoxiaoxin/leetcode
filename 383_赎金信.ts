function canConstruct(ransomNote: string, magazine: string): boolean {
  let map = new Map<string, number>();
  for (let i = 0; i < ransomNote.length; i++) {
    if (map.has(ransomNote[i])) {
      let num = map.get(ransomNote[i]);
      map.set(ransomNote[i], (num! += 1));
    } else {
      map.set(ransomNote[i], 1);
    }
  }
  for (let i = 0; i < magazine.length; i++) {
    if (map.has(magazine[i])) {
      let num = map.get(magazine[i]);
      map.set(magazine[i], (num! -= 1));
    }
  }
  for (let [key, value] of map) {
    if (value > 0) {
      console.log(value);
      return false;
    }
  }
  return true;
}

console.log(canConstruct("aa", "aab"));
