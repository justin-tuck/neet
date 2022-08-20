import { UnitTests, Test } from "../Utils/Test.js";
import { TreeNode, TreeUtils } from "../Utils/Tree.js";

/**
 * Given the roots of two binary trees root and subRoot,
 * return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.
 * A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants.
 * The tree tree could also be considered as a subtree of itself.
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
// Just made isSameTree, might have to walk through whole tree and then check if it is same tree on each node
var isSubtree = function (root, subRoot) {
  console.log(root.toString());
  let isSubtree = false;
  let dfs = (node) => {
    if (!node) {
      return null;
    }
    if (isSameTree(node, subRoot)) {
      console.log(node.toString());
      console.log(subRoot.toString());
      isSubtree = true;
      return null;
    }

    dfs(node.left);
    dfs(node.right);
    return node;
  };

  dfs(root);
  return isSubtree;
};

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
    expected: false,
    args: [
      TreeUtils.buildBinaryTree([3, 4, 5, 1, 2, null, null, null, null, 1]),
      TreeUtils.buildBinaryTree([4, 1, 2]),
    ],
  }),
  // new Test({
  //   expected: true,
  //   args: [
  //     TreeUtils.buildBinaryTree([3, 4, 5, 1, 2]),
  //     TreeUtils.buildBinaryTree([4, 1, 2]),
  //   ],
  // }),
];
const test = new UnitTests(isSubtree, testsToRun);
test.run();
