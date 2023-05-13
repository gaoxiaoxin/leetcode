import { ListNode, createListNode, getArray } from "./ListNode";
function removeElements(head: ListNode | null, val: number): ListNode | null {
  if (head === null) return head;
  let newHead: ListNode = new ListNode();
  newHead.next = head;
  let curry: ListNode = newHead;
  while (curry.next !== null) {
    if (curry.next.val == val) {
      curry.next = curry.next.next;
    } else {
      curry = curry.next;
    }
  }
  return newHead.next;
}

let head = createListNode([7, 7, 7, 7]);

console.log(getArray(removeElements(head, 7)));
