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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoMaxTree = function (root, val) {
  const node = new TreeNode(val);
  if (root === null) return node;
  if (val > root.val) {
    node.left = root;
    return node;
  }
  root.right = insertIntoMaxTree(root.right, val);
  return root;
};
