
class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(vertex) {
    if (this.adjList[vertex]) return;
    this.adjList[vertex] = [];
  }

  addEdges(srcValue, destValue) {
    if (!this.adjList[srcValue]) this.addVertex(srcValue);
    if (!this.adjList[destValue]) this.addVertex(destValue);

    this.adjList[srcValue].push(destValue);
    this.adjList[destValue].push(srcValue);

  }

  buildGraph(edges) {
    edges.forEach(edgeArr => this.addEdges(edgeArr[0], edgeArr[1]));
    return this.adjList;
  }

  breadthFirstTraversal(startingVertex) {
    let seenNodes = new Set();
    let arr = [];
    let queue = [startingVertex];

    while (queue.length) {
      let current = queue.shift();

      if (!seenNodes.has(current)) {
        arr.push(current);
        seenNodes.add(current);
        this.adjList[current].forEach(node => queue.push(node));
      }
    }
    return arr;
  }

  depthFirstTraversalIterative(startingVertex) {
    let seenNodes = new Set();
    let arr = [];
    let stack = [startingVertex];

    while (stack.length) {
      let current = stack.pop();

      if (!seenNodes.has(current)) {
        arr.push(current);
        seenNodes.add(current);
        this.adjList[current].forEach(node => stack.push(node));
      }
    }
    return arr;
  }

  depthFirstTraversalRecursive(startingVertex, visited = new Set(), vertices = []) {
    // console.log(startingVertex)
    if (visited.has(startingVertex)) return;
    
    
      visited.add(startingVertex);
      vertices.push(startingVertex);
      this.adjList[startingVertex].forEach(el => this.depthFirstTraversalRecursive(el, visited, vertices) )
     

      return vertices;
  }

}

module.exports = {
  Graph
};
