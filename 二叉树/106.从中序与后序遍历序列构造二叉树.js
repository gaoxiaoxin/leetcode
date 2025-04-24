/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var buildTree = function (inorder, postorder) {
  if (inorder.length === 0 || postorder === 0) return null;
  // 通过后序遍历的数组，找到整棵树的根节点
  const rootVal = postorder.pop();
  const root = new TreeNode(rootVal);
  // 对中序遍历做拆分，分出左子树和右子树
  let rootIndex = inorder.indexOf(rootVal); // 获取中间节点在中序遍历中的下标
  root.left = buildTree(
    inorder.slice(0, rootIndex),
    postorder.slice(0, rootIndex)
  ); // 创建左节点
  root.right = buildTree(
    inorder.slice(rootIndex + 1),
    postorder.slice(rootIndex)
  ); // 创建右节点
  return root;
};

buildTree([2, 1], [2, 1]);
