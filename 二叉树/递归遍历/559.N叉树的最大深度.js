/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val === undefined ? null : val;
 *    this.children = children === undefined ? null : children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === null) return 0;
  if (!root.children || root.children.length === 0) return 1;
  return (
    1 +
    Math.max(
      ...root.children?.map((item) => {
        return maxDepth(item);
      })
    )
  );
};
