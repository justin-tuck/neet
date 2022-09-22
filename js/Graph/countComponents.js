import { UnitTests, Test } from "../Utils/Test.js";

//Brute force

class Graph {
  constructor(size, edges) {
    this.size = size;
    this.graph = new Array(size);
    //init graph
    //O(v)
    for (let i = 0; i < size; i++) {
      this.graph[i] = new Node(i);
    }

    // O(e)
    for (const [a, b] of edges) {
      this.addEdge(a, b);
      this.addEdge(b, a);
    }
  }

  addEdge(a, b) {
    let node = this.graph[a];
    node.addEdge(b);
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.edges = [];
  }
  addEdge(val) {
    this.edges.push(val);
  }
}

/**
 * You have a graph of n nodes.
 * You are given an integer n and an array edges
 *  where edges[i] = [ai, bi] indicates that there is an edge between ai and bi in the graph
 * Return the number of connected components in the graph.
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
// O(e + v)
var countComponents = function (n, edges) {
  // graph array of nodes node has val and linked list of edges
  const g = new Graph(n, edges);
  let visited = new Set();
  let cCount = 0;
  //loop through whole graph to make sure we don’t miss a node
  // O(n)
  for (const node of g.graph) {
    if (node && !visited.has(node.val)) {
      //Every time going to new container increase count
      cCount++;
      dfs(node);
    }
  }

  function dfs(node) {
    if (visited.has(node.val)) return;
    visited.add(node.val);
    //loop through edges
    for (const e of node.edges) {
      dfs(g.graph[e]);
    }
  }

  return cCount;
};

//
var unionFind = function (n, edges) {
  // O(2n) space
  // create parent array each node parent of itself to begin with
  let parent = [...Array(n).keys()];
  //each begins with rank of 1
  let rank = new Array(n).fill(1);

  function find(n1) {
    let res = n1;
    while (res != parent[res]) {
      //path compression
      parent[res] = parent[parent[res]];
      res = parent[res];
    }
    return res;
  }

  function union(n1, n2) {
    let [p1, p2] = [find(n1), find(n2)];

    if (p1 === p2) return 0; //did not union

    if (rank[p2] > rank[p1]) {
      parent[p1] = p2;
      rank[p2] += rank[p1];
    } else {
      parent[p2] = p1;
      rank[p1] += rank[p2];
    }
    return 1; // unined
  }

  let result = n;
  for (const [n1, n2] of edges) {
    result -= union(n1, n2);
  }

  return result;
};

var countComponentsTwo = function (n, edges) {
  let parents = [...Array(n).keys()];
  let rank = new Array(n).fill(1);
  let result = n;

  function find(n) {
    let p = n;
    while (p != parents[p]) {
      // need to flat this, can get out of hand for bouncing back and forth
      parents[p] = parents[parents[p]]; // set new parent to grandparent
      p = parents[p];
    }
    return p;
  }

  function union(n1, n2) {
    // first get their parents
    const [p1, p2] = [find(n1), find(n2)];

    if (p1 === p2) return 0;

    if (rank[p2] > rank[p1]) {
      parents[p1] = p2;
      rank[p2] += rank[p1];
    } else {
      parents[p2] = p1;
      rank[p1] += rank[p2];
    }
    return 1;
  }

  // union each edge
  for (const [n1, n2] of edges) {
    result -= union(n1, n2); // remove one if union
  }
  return result;
};

let testsToRun = [
  // new Test({
  //   expected: 2,
  //   args: [
  //     5,
  //     [
  //       [0, 1],
  //       [1, 2],
  //       [3, 4],
  //     ],
  //   ],
  // }),
  // new Test({
  //   expected: 1,
  //   args: [
  //     5,
  //     [
  //       [0, 1],
  //       [1, 2],
  //       [2, 3],
  //       [3, 4],
  //     ],
  //   ],
  // }),
  // new Test({
  //   expected: 2,
  //   args: [
  //     4,
  //     [
  //       [2, 3],
  //       [1, 2],
  //       [1, 3],
  //     ],
  //   ],
  // }),
  // new Test({
  //   expected: 1,
  //   args: [
  //     10,
  //     [
  //       [5, 6],
  //       [0, 2],
  //       [1, 7],
  //       [5, 9],
  //       [1, 8],
  //       [3, 4],
  //       [0, 6],
  //       [0, 7],
  //       [0, 3],
  //       [8, 9],
  //     ],
  //   ],
  // }),
  new Test({
    expected: 2,
    args: [
      6,
      [
        [4, 5],
        [2, 3],
        [0, 1],
        [1, 5],
      ],
    ],
  }),
];
const test = new UnitTests(countComponentsTwo, testsToRun);
test.run();
