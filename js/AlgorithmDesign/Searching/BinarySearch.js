import { BSTree } from "../DataStructures/BinarySearchTree.js";

/**
 * Searches Binary Tree in O(h) where h is hight, average case O(log(n)) worst case O(n)
 * @param {BSTree} node
 * @param {number} value
 */
const binary_search = (node, value) => {
  if (!node) return null;
  if (node.val === value) return node;
  const next = value < node.val ? node.left : node.right;
  return binary_search(next, value);
};

let sample = () => {
  let root = new BSTree(
    5,
    [3, 7, 4, 2, 9, 8, 6, 1, 12, 11, 16, 14, 13, 15, 17]
  );
  console.log(`${root}`);
  let node = binary_search(root, 12);
  console.log(`${node}`);
};

sample();

export { binary_search };
