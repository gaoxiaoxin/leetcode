/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  let candyAry = new Array(ratings.length).fill(1);
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candyAry[i] = candyAry[i - 1] + 1;
    }
  }
  for (let i = ratings.length - 1; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candyAry[i] = Math.max(candyAry[i + 1] + 1, candyAry[i]);
    }
  }
  return candyAry.reduce((a, b) => a + b);
};

console.log(candy([1, 0, 5]));
