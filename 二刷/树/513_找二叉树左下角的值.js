/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function (root) {
    let maxDepth = 0;
    let result = null;
    const dps = (root, depth) {
        if (root.left === null && root.right) {
            if (maxDepth < depth) {
                maxDepth = depth
            }
        }
        root.left && dps(root.left);
        root.right && dps(root.right)
    }
};
