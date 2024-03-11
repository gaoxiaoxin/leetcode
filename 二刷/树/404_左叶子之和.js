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
var sumOfLeftLeaves = function (root) {
  if (root === null) return 0;
  if (root.left === null && root.right === null) return 0;
  let leftValue = sumOfLeftLeaves(root.left);
  if (root.left && root.left.left === null && root.left.right === null) {
    leftValue = root.left.val;
  }
  let rightValue = sumOfLeftLeaves(root.right);
  let sum = leftValue + rightValue;
  return sum;
};
