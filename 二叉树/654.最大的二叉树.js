/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
var constructMaximumBinaryTree = function (nums) {
  if (nums.length === 0) return null;
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) max = nums[i];
  }
  const root = new TreeNode(max);
  const index = nums.indexOf(max);
  root.left = constructMaximumBinaryTree(nums.slice(0, index));
  root.right = constructMaximumBinaryTree(nums.slice(index + 1));
  return root;
};

constructMaximumBinaryTree([3, 2, 1, 6, 0, 5]);
