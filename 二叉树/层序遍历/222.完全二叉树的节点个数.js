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
var countNodes = function (root) {
  const result = [];
  const queue = [];
  if (root === null) return 0;
  queue.push(root);
  while (queue.length !== 0) {
    const length = queue.length;
    const curList = [];
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      curList.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    result.push(...curList);
  }
  return result.length;
};
