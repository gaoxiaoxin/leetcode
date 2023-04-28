function lengthOfLastWord1(s: string): number {
  let array: Array<Array<string>> = [];
  let interArray: Array<string> = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      interArray.length > 0 ? array.push(interArray) : "";
      interArray = [];
      continue;
    } else {
      interArray.push(s[i]);
    }
  }
  interArray.length > 0 ? array.push(interArray) : "";
  return array[array.length - 1].length;
}

// 新的解决方案
function lengthOfLastWord(s: string): number {
  const arr = s.split(" ").filter((item) => item);
  return arr[arr.length - 1].length;
}
console.log(lengthOfLastWord("   fly me   to   the moon  "));

let s = "luffy is still joyboy";

console.log(lengthOfLastWord(s));
