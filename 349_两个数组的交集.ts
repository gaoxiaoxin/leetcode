// function intersection(nums1: number[], nums2: number[]): number[] {
//   let set1 = new Set();
//   let set2 = new Set<number>();
//   nums1.forEach((item) => {
//     set1.add(item);
//   });
//   nums2.forEach((item) => {
//     if (set1.has(item) && !set2.has(item)) {
//       set2.add(item);
//     }
//   });
//   return [...set2.values()];
// }

// 方法二
function intersection(nums1: number[], nums2: number[]): number[] {
  let set = new Set(nums2);
  return [...new Set(nums1)].filter((val) => set.has(val));
}
console.log(intersection([1, 2, 2, 1], [2, 2]));
