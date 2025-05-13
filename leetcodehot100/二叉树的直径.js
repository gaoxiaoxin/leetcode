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
// 其实就是左子树的最长边数和右子树的最长边数之和
var diameterOfBinaryTree = function (root) {
  let maxPath = 0;
  const getMaxPath = (root) => {
    if (root === null) return;
    const leftPath = root.left ? getMaxPath(root.left) : 0;
    const rightPath = root.right ? getMaxPath(root.right) : 0;
    maxPath = Math.max(leftPath + rightPath, maxPath);
    return 1 + Math.max(leftPath, rightPath);
  };
  getMaxPath(root);
  return maxPath;
};
