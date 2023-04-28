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

function binaryTreePaths(root: TreeNode | null): string[] {
  function recur(node: TreeNode, route: string, resArr: string[]): void {
    route += String(node.val);
    if (node.left === null && node.right === null) {
      resArr.push(route);
      return;
    }
    if (node.left !== null) {
      recur(node.left, route + "->", resArr);
      // 这里有回溯的过程
    }
    if (node.right !== null) {
      recur(node.right, route + "->", resArr);
    }
  }
  const resArr: string[] = [];
  if (root === null) return resArr;
  recur(root, "", resArr);
  return resArr;
}
