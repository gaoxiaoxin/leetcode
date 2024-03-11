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
  if (root === null) return 0;
  const left = minDepth(root.left);
  const right = minDepth(root.right);
  if (root.left === null && root.right !== null) {
    return 1 + right;
  }
  if (root.left !== null && root.right === null) {
    return 1 + left;
  }
  if (root.left && root.right) {
    return 1 + Math.min(left, right);
  }
};
