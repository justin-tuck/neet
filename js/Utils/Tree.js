class TreeNode {
  /**
   * Definition for a binary tree node.
   * function TreeNode(val, left, right) {
   *     this.val = (val===undefined ? 0 : val)
   *     this.left = (left===undefined ? null : left)
   *     this.right = (right===undefined ? null : right)
   * }
   */
  constructor(val, left, right) {
    this.val = val ? val : 0;
    this.left = left ? left : null;
    this.right = right ? right : null;
  }

  toString() {
    return TreeUtils.printTree(this);
  }
}

class TreeUtils {
  /**
   * Given an array of numbers return a Binary Tree
   * @param {number[]} numbers
   * @return {TreeNode}
   */
  static buildBinaryTree(numbers) {
    /**
     * Recursive method to create binaryTree
     * Math for left node and right node (2*N + 1) and (2*N + 2)
     * @param {number} value
     * @param {number} spot
     */
    let createTree = (value, spot) => {
      let leftSpot = 2 * spot + 1;
      let rightSpot = 2 * spot + 2;

      let leftNode = buildTreeNode(leftSpot, numbers);
      let rightNode = buildTreeNode(rightSpot, numbers);

      return new TreeNode(value, leftNode, rightNode);
    };
    /**
     * Compares if there a spot left in the Tree for a left or right child,
     * then build the node
     * @param {*} spot
     * @param {*} numbers
     * @returns TreeNode
     */
    let buildTreeNode = (spot, numbers) => {
      return spot < numbers.length && numbers[spot]
        ? createTree(numbers[spot], spot)
        : null;
    };

    return createTree(numbers[0], 0);
  }

  /**
   * Print out a tree
   * @param {*} node
   */
  static printTree(node) {
    let result = "\n";
    let print = (prefix, node, isLeft) => {
      if (node) {
        result += prefix + (isLeft ? "|-- " : "\\-- ") + node.val + "\n";
        print(prefix + (isLeft ? "|   " : "    "), node.left, true);
        print(prefix + (isLeft ? "|   " : "    "), node.right, false);
      }
    };

    print("", node, false);
    return result;
  }
}

export { TreeNode, TreeUtils };
