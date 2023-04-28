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
function findBottomLeftValue(root: TreeNode | null): number {
  let queue: Array<TreeNode> = [];
  queue.push(root!);
  let size = 1;
  let leftNode = root!.val;
  while (queue.length > 0) {
    let node = queue.shift();
    size--;
    node?.left && queue.push(node.left);
    node?.right && queue.push(node.right);
    if (size == 0) {
      leftNode = queue[0] ? queue[0].val : leftNode;
      size = queue.length;
    }
  }
  return leftNode;
}
