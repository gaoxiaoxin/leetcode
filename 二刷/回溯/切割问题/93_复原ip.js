/**
 * @param {string} s
 * @return {string[]}
 */
//  有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。

//  例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。
//  给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能的有效 IP 地址，这些地址可以通过在 s 中插入 '.' 来形成。你 不能 重新排序或删除 s 中的任何数字。你可以按 任何 顺序返回答案。
let path = [];
let result = [];
var restoreIpAddresses = function (s) {
  result = [];
  if (s.length < 4 || s.length > 12) return result;
  backtracking(s, 0);
  return result;
};

function backtracking(s, startIndex) {
  const len = path.length;
  if (len > 4) return;
  if (len === 4 && startIndex === s.length) {
    result.push(path.join("."));
    return;
  }
  for (let i = startIndex; i < s.length; i++) {
    const str = s.slice(startIndex, i + 1);
    if (str.length > 3 || +str > 255) break;
    if (str.length > 1 && str[0] === "0") break;
    path.push(str);
    backtracking(s, i + 1);
    path.pop();
  }
}

console.log(restoreIpAddresses("25525511135"));
