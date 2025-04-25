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
 * @return {boolean}
 */
var isValidBST = function (root) {
  let pre = null;
  const traversal = (root) => {
    if (root === null) return true;
    const left = traversal(root.left);
    if (pre !== root && pre.val >= root.val) return false;
    pre = root;
    const right = traversal(root.right);
    return left && right;
  };
  return traversal(root);
};
