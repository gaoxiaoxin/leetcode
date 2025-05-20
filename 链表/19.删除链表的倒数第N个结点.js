/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let p1 = head;
  for (let i = 0; i < n; i++) {
    p1 = p1.next;
  }
  const dummy = new ListNode(0, head);
  let p2 = dummy;
  while (p1 !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }
  p2.next = p2.next.next;
  return dummy.next;
};
