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
  let helperStack: TreeNode[] = [];
  let res: number[] = [];
  if (root === null) return res;
  let curNode: TreeNode | null = root;
  while (curNode !== null || helperStack.length > 0) {
    if (curNode !== null) {
      helperStack.push(curNode);
      curNode = curNode.left;
    } else {
      curNode = helperStack.pop()!;
      res.push(curNode.val);
      curNode = curNode.right;
    }
  }
  return res;
}
