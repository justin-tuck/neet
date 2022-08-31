import { UnitTests, Test } from "../Utils/Test.js";

// Definition for a Node.
class Node {
  /**
   *
   * @param {number} val
   * @param {Node[]} neighbors
   */
  constructor(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }

  toString() {
    let str = "";
    let visit = new Set();
    /**
     *
     * @param {Node} node
     * @returns {Node}
     */
    let dfs = (node) => {
      if (visit.has(node.val)) return node;
      visit.add(node.val);
      str += `${node.val} : `;

      for (let i = 0; i < node.neighbors.length; i++)
        str += node.neighbors[i].val + " ";
      str += "\n";
      for (let i = 0; i < node.neighbors.length; i++) dfs(node.neighbors[i]);
    };
    dfs(this);
    return str;
  }
}

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  if (!node) return null;
  const nodeMap = [0];

  const dfs = ({ val, neighbors }) =>
    Object.assign((nodeMap[val] = new Node(val)), {
      neighbors: neighbors.map(
        (neighbor) => nodeMap[neighbor.val] ?? dfs(neighbor)
      ),
    });

  return dfs(node);
};

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node1.neighbors.push(node2);
node1.neighbors.push(node4);

node2.neighbors.push(node1);
node2.neighbors.push(node3);

node3.neighbors.push(node2);
node3.neighbors.push(node4);

node4.neighbors.push(node1);
node4.neighbors.push(node3);

let testsToRun = [
  new Test({
    expected: [
      [
        [2, 4],
        [1, 3],
        [2, 4],
        [1, 3],
      ],
    ],
    args: [node1],
  }),
];
const test = new UnitTests(cloneGraph, testsToRun);
test.run();
