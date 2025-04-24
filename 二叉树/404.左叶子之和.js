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
  return getSum(root, false);
};

const getSum = (node, isLeft) => {
  if (node.left === null && node.right === null && isLeft) return node.val;
  if (node.left === null && node.right === null && !isLeft) return 0;
  let sum = 0;
  if (node.left) {
    sum += getSum(node.left, true);
  }
  if (node.right) {
    sum += getSum(node.right, false);
  }
  return sum;
};
