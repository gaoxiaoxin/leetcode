class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function swapPairs(head: ListNode | null): ListNode | null {
  let dummyHead: ListNode | null = new ListNode(0, head);
  let current: ListNode | null = dummyHead;
  while (current?.next != null && current.next.next != null) {
    let node: ListNode = current.next;
    let node3: ListNode | null = current.next.next.next;
    current.next = current.next.next;
    current.next.next = node;
    node.next = node3;
    current = current.next.next;
  }
  return dummyHead.next;
}
