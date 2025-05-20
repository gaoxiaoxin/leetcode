/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let middle = null;
  let p1 = head;
  let newHead = null;
  while (p1 !== null) {
    middle = p1.next;
    p1.next = newHead;
    newHead = p1;
    p1 = middle;
  }
  return newHead;
};
