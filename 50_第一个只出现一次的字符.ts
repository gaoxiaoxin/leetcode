function firstUniqChar(s: string): string {
  if (s.length === 0) return " ";
  let map = new Map<string, boolean>();
  s.split("").forEach((item) => {
    if (map.has(item)) {
      map.set(item, false);
    } else {
      map.set(item, true);
    }
  });
  for (let key of map) {
    if (key[1]) {
      return key[0];
    }
  }
  return " ";
}

console.log(firstUniqChar("abaccdeff"));
