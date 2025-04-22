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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  const queue = [];
  queue.push(root);
  while (queue.length !== 0) {
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      if (isSameTree(node, subRoot)) return true;
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return false;
};

const isSameTree = (root, subRoot) => {
  if (
    (root === null && subRoot !== null) ||
    (root !== null && subRoot === null)
  )
    return false;
  if (root === null && subRoot === null) return true;
  if (root.val !== subRoot.val) return false;

  return (
    isSameTree(root.left, subRoot.left) && isSameTree(root.right, subRoot.right)
  );
};
