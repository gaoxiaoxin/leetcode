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
 * @return {string[]}
 */
var binaryTreePaths1 = function (root) {
  const result = [];
  let curResult = [];
  getPath(root, curResult, result);
  return result;
};

const getPath = (root, curResult, result) => {
  if (root.left === null && root.right === null) {
    curResult.push(root.val);
    result.push(curResult.join("->"));
    curResult.pop();
    return;
  }
  curResult.push(root.val);
  root.left && getPath(root.left, curResult, result);
  root.right && getPath(root.right, curResult, result);
  curResult.pop();
};

// 方法二
var binaryTreePaths = function (root) {
  const result = [];
  getPath2(root, "", result);
  return result;
};

const getPath2 = (root, curResult, result) => {
  if (root.left === null && root.right === null) {
    return result.push((curResult += root.val));
  }
  curResult += root.val + "->";
  root.left && getPath2(root.left, curResult, result);
  root.right && getPath2(root.right, curResult, result);
};
