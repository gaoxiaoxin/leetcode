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
var largestValues = function (root) {
  const result = [];
  const queue = [];
  if (root === null) return result;
  queue.push(root);
  while (queue.length !== 0) {
    const length = queue.length;
    let max = -Infinity;
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      max = max > node.val ? max : node.val;
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    result.push(max);
  }
  return result;
};

console.log(Number.MIN_VALUE);
