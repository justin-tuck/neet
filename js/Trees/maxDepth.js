import { UnitTests, Test } from "../Utils/Test.js";
import { TreeNode, TreeUtils } from "../Utils/Tree.js";

/**
 * Given the root of a binary tree, return its maximum depth.
 * A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 *
 * @param {TreeNode} root
 * @return {number}
 */
// O(n) needed to walk through every node of the tree
var maxDepth = function (root) {
  let maxDepth = 0;

  let dfs = (root, depth) => {
    if (!root) {
      return null;
    }

    if (depth > maxDepth) {
      maxDepth = depth;
    }

    dfs(root.left, depth + 1);
    dfs(root.right, depth + 1);
  };

  dfs(root, maxDepth + 1);

  return maxDepth;
};

let testsToRun = [
  new Test({
    expected: 3,
    args: [TreeUtils.buildBinaryTree([3, 9, 20, null, null, 15, 7])],
  }),
  new Test({
    expected: 2,
    args: [TreeUtils.buildBinaryTree([1, null, 2])],
  }),
];
const test = new UnitTests(maxDepth, testsToRun);
test.run();
