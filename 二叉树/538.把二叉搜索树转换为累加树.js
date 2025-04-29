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
 * @return {TreeNode}
 */
var convertBST = function (root) {
  let pre = null;

  const traveral = (root) => {
    if (root === null) return;
    traveral(root.right);
    if (pre) root.val += pre.val;
    pre = root;
    traveral(root.left);
  };
  traveral(root);
  return root;
};
