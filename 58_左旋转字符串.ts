function reverseLeftWords(s: string, n: number): string {
  let left: string = s.slice(0, n);
  let right: string = s.slice(n);
  return right + left;
}

console.log(reverseLeftWords("abcdefg", 2));
