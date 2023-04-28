class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reversePrint(head: ListNode | null): number[] {
  let arr: Array<number> = [];
  let newHead: ListNode | null = head;
  if (newHead !== null) {
    while (newHead.next !== null) {
      arr.push(newHead.val);
      newHead = newHead?.next;
    }
  }
  return arr.reverse();
}
