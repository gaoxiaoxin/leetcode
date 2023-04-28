class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
// 方法一
// function reverseList(head: ListNode | null): ListNode | null {
//   if (head === null) {
//     head;
//   }
//   let newHead: ListNode | null = head;
//   let arr: number[] = [];
//   while (newHead !== null) {
//     arr.push(newHead.val);
//     newHead = newHead.next;
//   }
//   arr = arr.reverse();
//   newHead = head;
//   let i: number = 0;
//   while (newHead !== null) {
//     newHead.val = arr[i];
//     i++;
//     newHead = newHead.next;
//   }
//   return head;
// }

// 方法二;
// 循环
function reverseList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head;
  let newHead: ListNode | null = null;
  while (head) {
    let current = head.next;
    head.next = newHead;
    newHead = head;
    head = current;
  }
  return newHead;
}

export {};
