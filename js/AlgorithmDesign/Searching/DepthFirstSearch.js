import { EdgeNode, Graph } from "../DataStructures/Graph.js";

/**
 * Depth First Search
 * @param {Graph} graph
 * @param {number} v  - vertex
 */
let dfs = (graph, v) => {
  //Set up info gathering arrays
  let [discovered, processed] = [[], []];
  let [entryTime, exitTime] = [[], []];
  let parent = [];

  let finished = false; // break out early
  let time = 0; // counter

  const search = (graph, v) => {
    if (finished) return;

    discovered[v] = true;
    time += 1;
    entryTime[v] = time; // know when a vertex was accessed
    processedVertexEarly(v);
    let p = graph.edges[v];
    while (p) {
      let y = p.y;
      if (!discovered[y]) {
        parent[y] = v;
        processEdge(v, y);
        search(graph, y);
      } else if (!processed[y] || graph.directed) processEdge(v, y);

      if (finished) return;
      p = p.next;
    }
    processVertexLate(v);
    time += 1;
    exitTime[v] = time;
    processed[v] = true;
  };

  search(graph, v);
};

//Helper methods to process Graph in different points
const processedVertexEarly = (v) => console.log(`processed vertex ${v}`);
const processEdge = (x, y) => console.log(`processed edge ${x} , ${y} `); //count edges
const processVertexLate = (v) => {};
let sample = () => {
  let graph = new Graph();

  graph.read(
    `1 2
    1 5
    1 6
    2 3
    2 5
    3 4
    4 5`
  );

  dfs(graph, 1);
};

sample();

export { dfs };
