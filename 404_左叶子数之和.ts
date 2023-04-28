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

function sumOfLeftLeaves(root: TreeNode | null): number {
  if (root === null) return 0;
  if (root.left === null && root.right === null) return root.val;
  let sum: number = 0;
  if (root.left !== null) {
    preorderTraversalTree(root.left, sum);
  }
}

function preorderTraversalTree(root: TreeNode | null, result: number) {}
// 根节点，然后判断，有没有
