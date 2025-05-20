/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 */
var mergeTwoLists = function (list1, list2) {
  var dummy = new ListNode(-1);
  var p = dummy;
  while (list1 !== null && list2 !== null) {
    // 比较 list1 和 list2 的两个指针, 将值比较小的节点接到 p 指针
    if (list1.val > list2.val) {
      p.next = list2;
      list2 = list2.next;
    } else {
      p.next = list1;
      list1 = list1.next;
    }
    p = p.next;
  }
  if (list1 !== null) {
    p.next = list1;
  }
  if (list2 !== null) {
    p.next = list2;
  }

  return dummy.next;
};
