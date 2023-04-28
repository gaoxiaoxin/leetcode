class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let str1: string | number = "";
  let str2: string | number = "";
  while (l1) {
    str1 += l1.val;
    l1 = l1.next;
  }
  while (l2) {
    str2 += l2.val;
    l2 = l2.next;
  }
  let sum: BigInt | string =
    BigInt(str1.split("").reverse().join("")) +
    BigInt(str2.split("").reverse().join(""));
  sum = sum.toString().split("").reverse().join("");
  let head = new ListNode(Number(sum[0]));
  let current = head;
  for (let i = 1; i < sum.length; i++) {
    current.next = new ListNode(Number(sum[i]));
    current = current.next;
  }
  return head;
}
