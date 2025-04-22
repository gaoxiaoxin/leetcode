/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  return isSame(p, q);
};

const isSame = (left, right) => {
  if ((left === null && right !== null) || (left !== null && right === null))
    return false;
  if (left === null && right === null) return true;
  if (left.val !== right.val) return false;
  const isSameLeft = isSame(left.left, right.left);
  const isSameRight = isSame(left.right, right.right);
  return isSameLeft && isSameRight;
};
