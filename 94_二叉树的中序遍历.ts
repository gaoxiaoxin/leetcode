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

function inorderTraversal(root: TreeNode | null): number[] {
  if (root === null) return [];
  let result: number[] = [];
  inorderTraversalTree(root, result);
  return result;
}
// 递归法
function inorderTraversalTree(root: TreeNode | null, result: number[]): void {
  if (root === null) return;
  inorderTraversalTree(root.left, result);
  result.push(root.val);
  inorderTraversalTree(root.right, result);
}

export {};
