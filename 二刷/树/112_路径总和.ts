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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false;
  return traversal(root, targetSum - root.val);
}

function traversal(root: TreeNode, targetSum: number) {
  if (!root.left && !root.right && targetSum === 0) return true;
  if (root.left) {
    if (traversal(root.left, targetSum - root.left.val)) return true;
  }
  if (root.right) {
    if (traversal(root.right, targetSum - root.right.val)) return true;
  }
  return false;
}
