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
var preorderTraversal = function (root) {
  const result = [];
  traversal(root, result);
  return result;
};
/**
 *
 * @param {TreeNode} treeNode
 * @param {Array} result
 * @returns
 */
const traversal = (treeNode, result) => {
  if (treeNode === null) return;
  result.push(treeNode.val);
  traversal(treeNode.left, result);
  traversal(treeNode.right, result);
};
