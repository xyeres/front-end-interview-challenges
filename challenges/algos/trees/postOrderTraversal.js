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
 * @return {number[]}
 *
 * @description Iterative post order traversal of binary tree
 */
var postorderTraversal = function (root) {
  if (!root) return [];

  let result = [];
  let nodeStack = [];

  nodeStack.push(root);

  while (nodeStack.length) {
    let node = nodeStack.pop();
    result.unshift(node.val);
    
    if (node.left) {
      nodeStack.push(node.left);
    }
    if (node.right) {
      nodeStack.push(node.right);
    }
  }
  return result
};
