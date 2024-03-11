const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;
let data = [];
void (async function () {
  // Write your code here
  while ((line = await readline())) {
    data.push(line);
  }
  let T = data[0];
  data.shift();
  let TData = [];
  for (let i = 0; i < T; i++) {
    TData = data.splice(0, 4);
    // if( T > 1) {
    //     console.log(TData);
    // }
    let [N, S, M, K] = TData;
    let flag = false;
    let s = S.split("").map((k) => +k);
    let k = K.split("");
    for (let j = 0; j < M; j++) {
      flag = false;
      if (k[j] === "M") {
        let l = 0,
          r = 0;
        while (l < N && r < N) {
          if (s[l] === 1) {
            console.log(l + 1);
            s[l]++;
            flag = true;
            break;
          }
          if (s[r] !== 0) {
            r++;
          }
          l++;
        }
        if (!flag) console.log(r + 1);
      } else {
        let l = 0,
          r = 0;
        while (l < N && r < N) {
          if (s[l] === 0) {
            console.log(l + 1);
            s[l]++;
            flag = true;
            break;
          }
          if (s[r] !== 1) {
            r++;
          }
          l++;
        }
        if (!flag) console.log(r + 1);
      }
    }
  }
})();
