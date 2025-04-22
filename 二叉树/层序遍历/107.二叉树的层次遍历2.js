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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  const result = [];
  const queue = [];
  if (root === null) return result;
  queue.push(root);
  while (queue.length !== 0) {
    // 保存当前层次的数
    const length = queue.length;
    // 保存每层的临时数据
    const curLevel = [];
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      curLevel.push(node.val);
      // 将该节点的子节点塞入队列中
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    result.unshift(curLevel);
  }
  return result;
};
