// problem located at https://leetcode.com/problems/n-ary-tree-preorder-traversal

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

class TreeNode {
  constructor(val, children) {
    this.val = val;
    this.children = children;
  }
};

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorderIterative = function (root) {
  var nodeStack = [root],
    result = [];

  if (!root) return result;


  while (nodeStack.length) {
    let node = nodeStack.pop()
    result.push(node.val)

    let children = null;
    if (node.children) {
      children = node.children.reverse()
      nodeStack = nodeStack.concat(children)
    }
  }

  return result;
};

var root = new TreeNode(1, [new TreeNode(3, [new TreeNode(5, null), new TreeNode(6, null)]), new TreeNode(2, null), new TreeNode(4, null)])

console.log(preorderIterative(root))