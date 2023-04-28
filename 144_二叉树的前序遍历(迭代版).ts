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

function preorderTraversal(root: TreeNode | null): number[] {
  if (root === null) return [];
  let result: number[] = [];
  let stack: TreeNode[] = [];
  stack.push(root);
  let node: TreeNode;
  while (stack.length !== 0) {
    node = stack.pop()!;
    if (node !== null) {
      result.push(node.val);
    } else {
      continue;
    }
    if (node.right !== null) stack.push(node.right);
    if (node.left !== null) stack.push(node.left);
  }
  return result;
}
