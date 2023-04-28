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
// 层序遍历
function countNodes1(root: TreeNode | null): number {
  if (root === null) return 0;
  let size: number = 0;
  let queue: TreeNode[] = [];
  queue.push(root);
  while (queue.length > 0) {
    let node = queue.pop();
    size++;
    if (node?.left) {
      queue.push(node.left);
    }
    if (node?.right) {
      queue.push(node.right);
    }
  }
  return size;
}

// 后序遍历
function countNodes2(root: TreeNode | null): number {
  if (root === null) return 0;
  let left = countNodes2(root.left);
  let right = countNodes2(root.right);
  return left + right + 1;
}

export {};
