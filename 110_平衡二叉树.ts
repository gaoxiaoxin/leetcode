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

function isBalanced(root: TreeNode | null): boolean {
  return getHeight(root) === -1 ? false : true;
}

function getHeight(root: TreeNode | null): number {
  if (root === null) return 0;
  let leftHeight = getHeight(root.left);
  if (leftHeight === -1) {
    return -1;
  }
  let rightHeight = getHeight(root.right);
  if (rightHeight === -1) {
    return -1;
  }
  if (Math.abs(leftHeight - rightHeight) > 1) {
    return -1;
  } else {
    return 1 + Math.max(leftHeight, rightHeight);
  }
}
