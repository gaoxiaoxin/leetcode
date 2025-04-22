/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
  const queue = [];
  if (root === null) return root;
  queue.push(root);
  while (queue.length !== 0) {
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      if (i < length - 1) {
        node.next = queue[0];
      }

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }

  return root;
};
