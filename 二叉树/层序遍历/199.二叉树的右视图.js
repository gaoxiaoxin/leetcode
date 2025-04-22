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
var rightSideView = function (root) {
  const result = [];
  const queue = [];
  if (root === null) return result;
  queue.push(root);
  while (queue.length !== 0) {
    //  获取本层最后一个数字
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      if (i === length - 1) {
        result.push(node.val);
      }
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return result;
};
