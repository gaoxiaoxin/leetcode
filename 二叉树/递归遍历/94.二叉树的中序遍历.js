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
var inorderTraversal = function (root) {
  const result = [];
  traversal(root, result);
  return result;
};

function traversal(treeNode, treeNodeList) {
  if (treeNode === null) return;
  traversal(treeNode.left, treeNodeList);
  treeNodeList.push(treeNode.val);
  traversal(treeNode.right, treeNodeList);
}
