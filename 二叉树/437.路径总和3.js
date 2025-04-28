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
 * @param {number} targetSum
 * @return {number}
 */

var pathSum = function (root, targetSum) {
  if (root === null) return false;
  let result = 0;
  const left = pathSum(root.left, targetSum);
  const right = pathSum(root.right, targetSum);

  return result + left + right;
};
