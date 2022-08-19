import { UnitTests, Test } from "../Utils/Test.js";
import { TreeNode, TreeUtils } from "../Utils/Tree.js";

/**
 * Given the root of a binary tree, invert the tree, and return its root.
 *
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) {
    return null;
  }

  let holder = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(holder);

  return root;
};

let testsToRun = [
  new Test({
    expected: TreeUtils.buildBinaryTree([4, 7, 2, 9, 6, 3, 1]),
    args: [TreeUtils.buildBinaryTree([4, 2, 7, 1, 3, 6, 9])],
  }),
];
const test = new UnitTests(invertTree, testsToRun);
test.run();
