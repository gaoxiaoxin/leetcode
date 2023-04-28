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
// 题目要求 , 层次遍历
function levelOrder(root: TreeNode | null): number[] {
  let result: number[] = [];
  if (!root) return result;
  let queue: TreeNode[] = [];
  queue.push(root);
  while (queue.length > 0) {
    const node = queue.shift();
    result.push(node!.val);
    if (node!.left) {
      queue.push(node!.left);
    }
    if (node!.right) {
      queue.push(node!.right);
    }
  }
  return [];
}

// function createTree(arr: number[]): TreeNode {
//   let root: TreeNode = new TreeNode(arr[0]);
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > root.val) {
//       if (root.right === null) {
//         let node: TreeNode = new TreeNode(arr[i]);
//         root.right = node;
//       } else {
//         createTree([arr[i]]);
//       }
//     } else if (arr[i] < root.val) {
//       root.left = node;
//     }
//   }
//   return root;
// }
export {};
