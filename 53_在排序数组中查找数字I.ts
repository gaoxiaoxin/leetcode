function search(nums: number[], target: number): number {
  let num = 0;
  let set = new Set<number>([target]);
  nums.forEach((item) => {
    if (set.has(item)) {
      num++;
    }
  });
  return num;
}
