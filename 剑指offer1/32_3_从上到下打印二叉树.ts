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
// 方法一, 借助了栈
function levelOrder1(root: TreeNode | null): number[][] {
  if (root === null) return [];
  let result: number[][] = [];
  let queue: TreeNode[] = [];
  queue.push(root);
  let size = 1;
  let arr: number[] = [];
  let flag = true;
  let stack: TreeNode[] = [];
  while (queue.length > 0) {
    let node = queue.shift();
    arr.push(node!.val);
    stack.push(node!);
    size--;
    if (size === 0) {
      result.push(arr);
      arr = [];
      while (stack.length > 0) {
        let node = stack.pop();
        if (flag) {
          if (node!.right) {
            queue.push(node!.right);
          }
          if (node!.left) {
            queue.push(node!.left);
          }
        } else {
          if (node!.left) {
            queue.push(node!.left);
          }
          if (node!.right) {
            queue.push(node!.right);
          }
        }
      }
      size = queue.length;
      flag = !flag;
    }
  }
  return result;
}
// 方法二
function levelOrder(root: TreeNode | null): number[][] {
  if (root === null) return [];
  let queue: TreeNode[] = [];
  let res: number[][] = [];
  queue.push(root);
  let flag: boolean = true;
  while (queue.length > 0) {
    let size = queue.length;
    let tmp: number[] = [];
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      if (flag) {
        tmp.push(node!.val);
      } else {
        tmp.unshift(node!.val);
      }
      node!.left && queue.push(node!.left);
      node!.right && queue.push(node!.right);
    }
    res.push(tmp);
    flag = !flag;
  }
  return res;
}
export {};
