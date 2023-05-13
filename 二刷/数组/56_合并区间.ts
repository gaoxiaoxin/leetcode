function merge(intervals: number[][]): number[][] {
  // 先按第一个元素排序
  intervals.sort((a, b) => a[0] - b[0]);

  // 计算合并
  let res: number[][] = [];
  for (let i = 1; i < intervals.length; i++) {
    // 对于 [1,3] 和 [2,6], 比较 3 和 2, 3 >= 2 则合并
    if (intervals[i][0] <= intervals[i - 1][1])
      intervals[i] = [
        intervals[i - 1][0],
        Math.max(intervals[i - 1][1], intervals[i][1]),
      ];
    // 不能合并则将上一个合并结果加入
    else res.push(intervals[i - 1]);
  }
  // 最后一次的结果需要额外放入
  res.push(intervals[intervals.length - 1]);
  return res;
}

let intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

console.log(merge(intervals));
