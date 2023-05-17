function fourSumCount(
  nums1: number[],
  nums2: number[],
  nums3: number[],
  nums4: number[]
): number {
  let map = new Map<number, number>();
  let count: number = 0;
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      let sum = nums1[i] + nums2[j];
      if (map.has(sum)) {
        let val = map.get(sum);
        val && map.set(sum, (val += 1));
      } else {
        map.set(sum, 1);
      }
    }
  }
  for (let i = 0; i < nums3.length; i++) {
    for (let j = 0; j < nums4.length; j++) {
      let sum = 0 - nums3[i] - nums4[j];
      if (map.has(sum)) {
        count++;
      }
    }
  }
  return count;
}
