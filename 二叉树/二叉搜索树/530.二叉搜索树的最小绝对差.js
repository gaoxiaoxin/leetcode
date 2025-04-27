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
var getMinimumDifference = function (root) {
  let result = Infinity;
  let pre = null;
  const traversal = (root) => {
    if (root === null) return;
    traversal(root.left);
    if (pre) result = Math.min(result, root.val - pre.val);
    pre = root;
    traversal(root.right);
  };
  traversal(root);
  return result;
};
