// https://leetcode.com/problems/binary-tree-preorder-traversal
//  Iterative Approach

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
 */
var preorderTraversal = function (root) {
  // keep a stack of nodes going while nodeStack.length
  var nodeStack = [],
    result = [];

  if (!root) return result;

  // push root to node stack
  nodeStack.push(root)

  while (nodeStack.length) {
    let node = nodeStack.pop()
    result.push(node.val)
    if (node.right) {
      nodeStack.push(node.right)
    }
    if (node.left) {
      nodeStack.push(node.left)
    }
  }
  return result
};