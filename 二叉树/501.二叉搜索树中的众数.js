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
  const map = new Map();
  let max = -Infinity;
  let result = [];
  const traversal = (root) => {
    if (root === null) return;

    if (map.has(root.val)) {
      map.set(root.val, map.get(root.val) + 1);
    } else {
      map.set(root.val, 1);
    }
    traversal(root.left);
    traversal(root.right);
  };
  traversal(root);
  console.log(map);

  map.forEach((value, key) => {
    console.log(value, key);

    if (value > max) {
      result = [key];
      max = value;
    } else if (value === max) {
      result.push(key);
    }
  });
  return result;
};
