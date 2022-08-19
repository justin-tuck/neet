import { UnitTests, Test } from "../Utils/Test.js";
import { TreeNode, TreeUtils } from "../Utils/Tree.js";

/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let diameter = 0;
  //walk through dfs increase count by each level
  let dfsFindMax = (node) => {
    if (!node) {
      // return negative 1 to negate my addition of branches
      return -1;
    }
    let leftCount = dfsFindMax(node.left);
    let rightCount = dfsFindMax(node.right);
    // see if following this path is larger without root
    // add 2 for each branch then subtract 1 if no branch exists or add if more further down
    diameter = Math.max(diameter, 2 + leftCount + rightCount);

    // return 1 edge plus the further branch
    return 1 + Math.max(leftCount, rightCount);
  };
  dfsFindMax(root);
  return diameter;
};

let testsToRun = [
  new Test({
    expected: 3,
    args: [TreeUtils.buildBinaryTree([1, 2, 3, 4, 5])],
  }),
  new Test({
    expected: 1,
    args: [TreeUtils.buildBinaryTree([1, 2])],
  }),
  new Test({
    expected: 2,
    args: [TreeUtils.buildBinaryTree([2, 3, null, 1])],
  }),
];
const test = new UnitTests(diameterOfBinaryTree, testsToRun);
test.run();
