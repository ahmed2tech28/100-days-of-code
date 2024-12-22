function cloneGraph(adjList) {
  if (!adjList) return null;

  // A map to store the mapping of original nodes to their cloned counterparts
  const nodeMap = new Map();

  // Helper function to clone nodes recursively
  function cloneNode(node) {
    if (!node) return null;

    // If the node is already cloned, return its clone
    if (nodeMap.has(node)) {
      return nodeMap.get(node);
    }

    // Clone the current node (create a shallow copy of the array)
    const clonedNode = [];
    nodeMap.set(node, clonedNode);

    // Recursively clone the neighbors
    for (const neighbor of adjList[node]) {
      clonedNode.push(cloneNode(neighbor));
    }

    return clonedNode;
  }

  // Clone all nodes
  const clonedGraph = {};
  for (const node in adjList) {
    clonedGraph[node] = cloneNode(node);
  }

  return clonedGraph;
}

// Example usage
const graph = {
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [3],
};

const clonedGraph = cloneGraph(graph);
console.log(clonedGraph);
