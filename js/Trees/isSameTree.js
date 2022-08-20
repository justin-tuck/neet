import { UnitTests, Test } from "../Utils/Test.js";
import { TreeNode, TreeUtils } from "../Utils/Tree.js";

/**
 * Given the roots of two binary trees p and q, write a function to check if they are the same or not.
 * Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  let isSameTree = true;

  let doubleDFS = (pNode, qNode) => {
    if (!pNode && !qNode) {
      return null;
    } else if (!pNode || !qNode) {
      isSameTree = false;
      return null;
    }

    if (pNode.val != qNode.val) {
      isSameTree = false;
      return null;
    }
    doubleDFS(pNode.left, qNode.left);
    doubleDFS(pNode.right, qNode.right);

    return [pNode, qNode];
  };
  doubleDFS(p, q);

  return isSameTree;
};

let testsToRun = [
  new Test({
    expected: true,
    args: [
      TreeUtils.buildBinaryTree([1, 2, 3]),
      TreeUtils.buildBinaryTree([1, 2, 3]),
    ],
  }),
  new Test({
    expected: false,
    args: [
      TreeUtils.buildBinaryTree([1, 2]),
      TreeUtils.buildBinaryTree([1, null, 2]),
    ],
  }),
  new Test({
    expected: false,
    args: [
      TreeUtils.buildBinaryTree([1, 2, 1]),
      TreeUtils.buildBinaryTree([1, 1, 2]),
    ],
  }),
];
const test = new UnitTests(isSameTree, testsToRun);
test.run();
