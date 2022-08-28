// Linked List Graph for now...

class EdgeNode {
  constructor(x, y, weight) {
    this.x = x;
    this.y = y;
    this.weight = weight;
  }
}

class Graph {
  constructor(directed = false) {
    this.edges = [];
    this.degree = []; // out degree at each vertex.
    this.numVertices = 0;
    this.numEdges = 0;
    this.directed = directed;
  }

  insertEdge(x, y, directed) {
    let edge = new EdgeNode(x, y, 0);
    edge.next = this.edges[x];
    this.edges[x] = edge;
    this.degree[x] = this.degree[x] ? this.degree[x] + 1 : 1;
    if (!directed) {
      this.insertEdge(y, x, true);
    } else {
      this.numEdges++;
    }
  }
}
