export {};

function twoSum2(nums: number[], target: number): number[] | void {
  for (let i: number = 0; i < nums.length; i++) {
    let nextNum: number = target - nums[i];
    console.log(nextNum);

    for (let j: number = i + 1; j < nums.length; j++) {
      if (nextNum === nums[j]) {
        return [i, j];
      }
    }
  }
}

function twoSum(nums: number[], target: number): number[] {
  let map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]) as number, i];
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
}
console.log(twoSum([2, 7, 11, 15], 9));
