function longestConsecutive(nums: number[]): number {
    let newNums = nums.sort((a, b) => a - b);
    console.log(newNums);

    return 0
};


longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])