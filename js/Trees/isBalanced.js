import { UnitTests, Test } from "../Utils/Test.js";
import { TreeNode, TreeUtils } from "../Utils/Tree.js";

/**
 * Given a binary tree, determine if it is height-balanced.
 * For this problem, a height-balanced binary tree is defined as:
 *    a binary tree in which the left and right subtrees of every node differ in height by no more than 1.
 *  @param {TreeNode} root
 * @return {boolean}
 */
// O(n) need to walk through all of the tree
var isBalanced = function (root) {
  console.log(root.toString());
  let isBalanced = true;

  let dfsHeight = (node) => {
    if (!node) {
      return -1;
    }

    let leftHeight = dfsHeight(node.left);
    let rightHeight = dfsHeight(node.right);
    if (Math.abs(leftHeight - rightHeight) > 1) {
      isBalanced = false;
    }
    return 1 + Math.max(leftHeight, rightHeight);
  };
  dfsHeight(root);
  return isBalanced;
};

let testsToRun = [
  new Test({
    expected: true,
    args: [TreeUtils.buildBinaryTree([3, 9, 20, null, null, 15, 7])],
  }),
  new Test({
    expected: false,
    args: [TreeUtils.buildBinaryTree([1, 2.1, 2, 3.1, 3, null, null, 4.1, 4])],
  }),
  new Test({
    expected: true,
    args: [TreeUtils.buildBinaryTree([])],
  }),
];
const test = new UnitTests(isBalanced, testsToRun);
test.run();
