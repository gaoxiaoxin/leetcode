class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let dummyHead: ListNode | null = new ListNode(0, head);
  let fast: ListNode | null = dummyHead;
  let slow: ListNode | null = dummyHead;
  n++;
  while (n-- && fast !== null) {
    fast = fast.next;
  }
  while (fast !== null) {
    fast = fast.next;
    slow = slow!.next;
  }
  slow!.next = slow!.next!.next;
  return dummyHead.next;
}

export {};
