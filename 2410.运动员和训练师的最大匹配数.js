/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */

// 方法一： 用大匹小， 用训练师来匹配运动员
var matchPlayersAndTrainers = function (players, trainers) {
  players.sort((a, b) => a - b);
  trainers.sort((a, b) => a - b);
  let result = 0;
  let t = trainers.length - 1;
  for (let p = players.length - 1; p >= 0 && t >= 0; p--) {
    if (players[p] <= trainers[t]) {
      result++;
      t--;
    }
  }
  return result;
};
