function uniqueOccurrences(arr: number[]): boolean {
  let map = new Map<number, number>();
  let set = new Set<number>();
  let flag: boolean = true;
  arr.forEach((item) => {
    if (map.has(item)) {
      map.set(item, map.get(item)! + 1);
    } else {
      map.set(item, 1);
    }
  });
  console.log([...map.values()]);
  [...map.values()].forEach((item) => {
    console.log(item);
    if (set.has(item)) {
      flag = false;
    } else {
      set.add(item);
    }
  });
  return flag;
}
console.log(uniqueOccurrences([1, 2]));
