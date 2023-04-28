// Definition for a Node.
function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (head === null || head.next === null) return head;
  let result = new Node(head.val, head.next, head.random);
  return result;
};

export {};
