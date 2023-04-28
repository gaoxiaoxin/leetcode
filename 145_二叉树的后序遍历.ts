export {};
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function postorderTraversal(root: TreeNode | null): number[] {
  if (root === null) return [];
  let result: number[] = [];
  postorderTraversalTree(root, result);
  return result;
}
// 递归法
function postorderTraversalTree(root: TreeNode | null, result: number[]): void {
  if (root === null) return;
  postorderTraversalTree(root.left, result);
  postorderTraversalTree(root.right, result);
  result.push(root.val);
}
