class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// function deleteDuplicates(head: ListNode | null): ListNode | null {
//   if (head === null || head.next === null) return head;
//   let set = new Set();
//   let pre: ListNode | null = head;
//   let current: ListNode | null = head.next;
//   set.add(pre.val);
//   while (current) {
//     if (!set.has(current.val)) {
//       set.add(current.val);
//       current = current.next;
//       pre = pre!.next;
//     } else {
//       pre!.next = current.next;
//       current = current.next;
//     }
//   }
//   return head;
// }

// 方法二
function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head;
  let cur: ListNode = head;
  while (cur.next) {
    if (cur.val == cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return head;
}
export {};
