/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  // 存放小于x的节点的链表
  const minDummy = new ListNode(-1);
  // 存放大于x的节点的链表
  const maxDummy = new ListNode(-1);
  let minCur = minDummy;
  let maxCur = maxDummy;
  while (head !== null) {
    if (head.val < x) {
      minCur.next = head;
      minCur = minCur.next;
    } else {
      maxCur.next = head;
      maxCur = maxCur.next;
    }
    // 不能让p指针直接前进
    const temp = head.next;
    head.next = null;
    head = temp;
  }
  minCur.next = maxDummy.next;
  return minDummy.next;
};
