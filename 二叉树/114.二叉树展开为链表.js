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
 * @return {void} Do not return anything, modify root in-place instead.
 */
// var flatten = function (root) {
//   if (root === null) return null;
//   const listRoot = new TreeNode();
//   let pre = listRoot;
//   const traversal = (root) => {
//     if (root === null) return null;
//     console.log("root", root.val);
//     pre.right = new TreeNode(root.val);
//     pre = pre.right;
//     traversal(root.left);
//     traversal(root.right);
//   };
//   traversal(root);
//   return listRoot;
// };

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  const result = [];
  const traversal = (root) => {
    if (root === null) return;
    result.push(root.val);
    traversal(root.left);
    traversal(root.right);
  };
  traversal(root);
  result.shift();
  let pre = root;
  result.forEach((item) => {
    pre.right = new TreeNode(item);
    pre.left = null;
    pre = pre.right;
  });
};
