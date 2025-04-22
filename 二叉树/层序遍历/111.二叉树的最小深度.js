/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  let depth = 0;
  const queue = [];
  if (root === null) return depth;
  queue.push(root);
  while (queue.length !== 0) {
    const length = queue.length;
    depth++;
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      if (!(node.left || node.right)) {
        return depth;
      }
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return depth;
};
