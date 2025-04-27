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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (root === null) return root;
  if (root.val > key) {
    root.left = deleteNode(root.left, key);
  }
  if (root.val < key) {
    root.right = deleteNode(root.right, key);
  }
  if (root.val === key) {
    if (root.left === null && root.right === null) {
      return null;
    } else if (root.left !== null && root.right === null) {
      root = root.left;
    } else if (root.left === null && root.right !== null) {
      root = root.right;
    } else if (root.left !== null && root.right !== null) {
      const rightNode = root.right;
      const minNode = getMinNode(rightNode);
      minNode.left = root.left;
      root = root.right;
    }
  }
  return root;
};

const getMinNode = (root) => {
  while (root.left) {
    root = root.left;
  }
  return root;
};
