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
var sortedArrayToBST = function (nums) {
  return traversal(nums, 0, nums.length - 1);
};

const traversal = (Arr, left, right) => {
  if (left > right) return null;
  let mid = Math.floor(left + (right - left) / 2);
  const node = new TreeNode(Arr[mid]);
  node.left = traversal(Arr, left, mid - 1);
  node.right = traversal(Arr, mid + 1, right);
  return node;
};
