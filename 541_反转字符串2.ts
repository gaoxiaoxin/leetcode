// function reverseStr2(s: string, k: number): string {
//   if (s.length <= 0) return s;
//   let slow = 0;
//   let fast = 0;
//   let num = 2 * k;
//   fast += num;
//   while (s[fast - 1] !== undefined) {
//     s = reverseString(s, slow, slow + k);
//     fast += num;
//     slow += num;
//   }
//   if (s.length % (2 * k) >= k) {
//     s = reverseString(s, slow, slow + k);
//   } else {
//     s = reverseString(s, slow, s.length);
//   }
//   return s;
// }

// function reverseString(s: string, i: number, k: number): string {
//   let Arrs: string[] = [...s];
//   let left = i;
//   let right = k - 1;
//   while (left < right) {
//     [Arrs[left], Arrs[right]] = [Arrs[right], Arrs[left]];
//     left++;
//     right--;
//   }
//   return Arrs.join("");
// }

// 优质版本
function reverseStr(s: string, k: number): string {
  let left: number;
  let right: number;
  let arr: string[] = s.split("");
  for (let i = 0; i < arr.length; i += 2 * k) {
    left = i;
    right = i + k - 1 >= arr.length ? arr.length - 1 : i + k - 1;
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return arr.join("");
}

console.log(reverseStr("abcdefg", 2));
