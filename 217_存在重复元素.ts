// 第一种
// function containsDuplicate(nums: number[]): boolean {
//   let newNums: Array<number> = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (newNums.indexOf(nums[i]) === -1) {
//       newNums.push(nums[i]);
//     } else {
//       return true;
//     }
//   }
//   return false;
// }

function containsDuplicate(nums: number[]): boolean {
  let set: Set<number> = new Set();
  for (let i of nums) {
    if (set.has(i)) {
      return true;
    } else {
      set.add(i);
    }
  }
  return false;
}

console.log(1, containsDuplicate([1, 1, 1, 1]));
