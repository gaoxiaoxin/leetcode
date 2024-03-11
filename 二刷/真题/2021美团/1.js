/**
 * 某比赛已经进入了淘汰赛阶段,已知共有n名选手参与了此阶段比赛，他们的得分分别是a_1,a_2….a_n,小美作为比赛的裁判希望设定一个分数线m，使得所有分数大于m的选手晋级，其他人淘汰。

但是为了保护粉丝脆弱的心脏，小美希望晋级和淘汰的人数均在[x,y]之间。

显然这个m有可能是不存在的，也有可能存在多个m，如果不存在，请你输出-1，如果存在多个，请你输出符合条件的最低的分数线。
 * 
 */

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;
const data = [];
void (async function () {
  // Write your code here
  while ((line = await readline())) {
    data.push(line.split(" "));
  }
  let [n, x, y] = [
    ...data[0].map((k) => {
      return +k;
    }),
  ];
  let cj = data[1]
    .map((k) => {
      return +k;
    })
    .sort((x, y) => x - y);
  if (n - y >= x) {
    console.log(cj[n - y - 1]);
  } else {
    console.log(cj[x - 1]);
  }
})();
