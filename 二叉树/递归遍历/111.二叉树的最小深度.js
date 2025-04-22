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
  return getMinDepth(root);
};

const getMinDepth = (root) => {
  if (root === null) return 0;
  const leftDepth = getMinDepth(root.left);
  const rightDepth = getMinDepth(root.right);
  if (root.left === null && root.right !== null) {
    return 1 + rightDepth;
  }
  if (root.right === null && root.left !== null) {
    return 1 + leftDepth;
  }
  return 1 + Math.min(leftDepth, rightDepth);
};
