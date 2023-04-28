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

function levelOrder(root: TreeNode | null): number[][] {
  let queue: TreeNode[] = [];
  let result: number[][] = [];
  if (root === null) return [];
  queue.push(root);
  let size = 1;
  let arr: number[] = [];
  while (queue.length > 0) {
    let node = queue.shift();
    size--;
    arr.push(node!.val);
    if (node!.left) {
      queue.push(node!.left);
    }
    if (node!.right) {
      queue.push(node!.right);
    }
    if (size === 0) {
      result.push(arr);
      arr = [];
      size = queue.length;
    }
  }
  return result;
}
