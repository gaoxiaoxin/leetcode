function reverseWords(s: string): string {
  let StrArr = s.split(" ").reverse();
  let newArr: string[] = [];
  for (let i = 0; i < StrArr.length; i++) {
    if (StrArr[i] !== "") {
      newArr.push(StrArr[i]);
    }
  }
  return newArr.join(" ");
}

reverseWords("  hello world  ");
