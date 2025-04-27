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
var findMode = function (root) {
  let maxCount = 0;
  let result = [];
  let pre = null;
  let count = 0;
  const traversal = (root) => {
    if (root === null) return;
    traversal(root.left);
    if (!pre) {
      count = 1;
    } else if (pre.val === root.val) {
      count++;
    } else if (pre.val < root.val) {
      count = 1;
    }
    pre = root;
    if (count === maxCount) {
      result.push(root.val);
    }
    if (count > maxCount) {
      maxCount = count;
      result = [root.val];
    }
    traversal(root.right);
  };
  traversal(root);
  return result;
};
