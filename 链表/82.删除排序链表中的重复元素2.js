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
var deleteDuplicates = function (head) {
  let dummy = new ListNode(-101, head);
  let fast = dummy;
  let slow = dummy;
  let value = 0;

  while (fast.next !== null) {
    if (fast.next.val !== slow.val) {
      value = 1;
    } else {
      slow.next = fast.next;
    }
  }
  return dummy.next;
};
