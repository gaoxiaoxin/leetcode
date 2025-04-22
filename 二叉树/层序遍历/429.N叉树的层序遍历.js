/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const result = [];
  const queue = [];
  if (root === null) return result;
  queue.push(root);
  while (queue.length !== 0) {
    const length = queue.length;
    const curLevel = [];
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      curLevel.push(node.val);
      if (node.children.length !== 0) {
        node.children.forEach((item) => {
          queue.push(item);
        });
      }
    }
    result.push(curLevel);
  }
  return result;
};
