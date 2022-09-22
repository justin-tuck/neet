// Linked List Graph for now...

class EdgeNode {
  constructor(y, weight) {
    this.y = y;
    this.next = null;
    this.weight = weight;
  }
}

class Graph {
  /**
   * Graph
   * @param {boolean} directed
   */
  constructor(directed = false) {
    this.edges = [];
    this.degree = []; // out degree at each vertex.
    this.numVertices = 0;
    this.numEdges = 0;
    this.directed = directed;
  }

  /**
   * read in a string of graph info each edge is a new line
   * Example:
   * 1 2
   * 1 3
   * 2 3
   * @param {string} info
   */
  read(info) {
    let graphText = info.split("\n");
    for (let line of graphText) {
      let [x, y] = line.trim().split(" ");
      this.insertEdge(Number(x), Number(y), this.directed);
      this.numVertices++;
    }
  }

  /**
   *
   * @param {number} x
   * @param {number} y
   * @param {boolean} directed
   */
  insertEdge(x, y, directed) {
    let p = new EdgeNode(y, null);
    p.next = this.edges[x];
    this.edges[x] = p;
    this.degree[x] = this.degree[x] ? this.degree[x] + 1 : 1;
    if (!directed) {
      this.insertEdge(y, x, true);
    } else {
      this.numEdges++;
    }
  }

  toString() {
    let result = "";
    for (let i = 1; i < this.numVertices; i++) {
      result += `${i}: `;
      let p = this.edges[i];
      while (p != null) {
        result += ` ${p.y}`;
        p = p.next;
      }
      result += "\n";
    }
    return result;
  }
}

function sample() {
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

  console.log(`${graph}`);
}

export { EdgeNode, Graph };
