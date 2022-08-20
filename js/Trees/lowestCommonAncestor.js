import { UnitTests, Test } from "../Utils/Test.js";
import { TreeNode, TreeUtils } from "../Utils/Tree.js";

/**
 * Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.
 * According to the definition of LCA on Wikipedia:
 * “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
 * Definition for a binary tree node. Binary search tree is sorted left lower than root right higher than root
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// O(log(n))
var lowestCommonAncestor = function (root, p, q) {
  if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  } else if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else {
    return root;
  }
};

// Needed to build out test data because I needed access to nodes
const node3 = new TreeNode(3);
const node5 = new TreeNode(5);
const node0 = new TreeNode(0);
const node4 = new TreeNode(4, node3, node5);
const node2 = new TreeNode(2, node0, node4);
const node7 = new TreeNode(7);
const node9 = new TreeNode(9);
const node8 = new TreeNode(8, node7, node9);
const node6 = new TreeNode(6, node2, node8);

let testsToRun = [
  new Test({
    expected: node6,
    args: [node6, node2, node8],
  }),
  new Test({
    expected: node2,
    args: [node6, node2, node4],
  }),
];
const test = new UnitTests(lowestCommonAncestor, testsToRun);
test.run();
