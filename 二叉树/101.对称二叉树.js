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
 * @return {boolean}
 */
// 先层序遍历，每层进行对比
var isSymmetric = function (root) {
  if (root === null) return true;
  // 确定递归参数
  return compareNode(root.left, root.right);
};

const compareNode = (left, right) => {
  // 确定递归终止条件
  if ((left !== null && right === null) || (left === null && right !== null))
    return false;
  if (left === null && right === null) return true;
  if (left.val !== right.val) return false;

  // 确认单层递归逻辑
  const outSide = compareNode(left.left, right.right);
  const inSide = compareNode(left.right, right.left);
  return outSide && inSide;
};
