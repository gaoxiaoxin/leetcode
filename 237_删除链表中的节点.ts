class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 Do not return anything, modify it in-place instead.
 */
function deleteNode(node: ListNode): void {
  node!.val = node!.next!.val;
  node!.next = node!.next!.next;
}

export {};
