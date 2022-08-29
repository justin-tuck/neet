import { Queue } from "../DataStructures/Queue.js";
import { EdgeNode, Graph } from "../DataStructures/Graph.js";

/**
 *
 * @param {Graph} graph
 * @param {number} start
 */
const bfs = (graph, start) => {
  let [discovered, processed, parent] = [[], [], []];
  let q = new Queue();
  q.enqueue(start);
  discovered[start] = true;

  while (q.size > 0) {
    let v = q.dequeue();
    processedVertexEarly(v);
    processed[v] = true;

    let p = graph.edges[v];
    while (p) {
      let y = p.y;
      if (!processed[y] || graph.directed) processEdge(v, y);
      if (!discovered[y]) {
        q.enqueue(y);
        discovered[y] = true;
        parent[y] = v;
      }
      p = p.next;
    }
    processVertexLate(v);
  }
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

  bfs(graph, 1);
};

sample();

export { bfs };
