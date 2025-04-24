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
var findBottomLeftValue = function (root) {
  let result = 0;
  const queue = [];
  queue.push(root);
  while (queue.length !== 0) {
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      if (i === 0) result = node.val;
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return result;
};
