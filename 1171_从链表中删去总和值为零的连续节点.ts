class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeZeroSumSublists(head: ListNode | null): ListNode | null {
  let dummyHead: ListNode | null = new ListNode(0, head);
  let fast: ListNode | null = dummyHead;
  let slow: ListNode | null = dummyHead;
  let sum: number = 0;
  while (fast !== null) {
    sum += fast.val;
    slow = dummyHead;
    let currentSum = sum;
    while (slow !== fast) {
      currentSum -= slow!.val;
      if (currentSum === 0) {
        slow!.next = fast.next;
        break;
      }
      slow = slow!.next;
    }
    fast = fast.next;
  }
  return dummyHead.next;
}

function getList(arr: number[]): ListNode {
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}
let head = getList([5, -3, -4, 1, 6, -2, -5]);

console.log(removeZeroSumSublists(head));
export {};
