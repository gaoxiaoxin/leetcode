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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  const result = [];
  traversal(root, result);
  return result;
};

const traversal = (treeNode, result) => {
  if (treeNode === null) return;
  traversal(treeNode.left, result);
  traversal(treeNode.right, result);
  result.push(treeNode.val);
};
