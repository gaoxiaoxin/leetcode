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
  let maxDepth = -Infinity;
  let result = null;
  const traversal = (node, depth) => {
    if (node.left === null && node.right === null) {
      // 当触碰到底层
      if (depth > maxDepth) {
        maxDepth = depth;
        result = node.val;
      }
      return;
    }
    node.left && traversal(node.left, depth + 1);
    node.right && traversal(node.right, depth + 1);
  };
  traversal(root, 1);
  return result;
};
