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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  const result = [];

  if (root === null) return result;

  const getPath = (root, count, curResult) => {
    if (root.left === null && root.right === null && count - root.val === 0) {
      result.push([...curResult, root.val]);
    }
    root.left && getPath(root.left, count - root.val, [...curResult, root.val]);
    root.right &&
      getPath(root.right, count - root.val, [...curResult, root.val]);
  };
  getPath(root, targetSum, []);
  return result;
};
