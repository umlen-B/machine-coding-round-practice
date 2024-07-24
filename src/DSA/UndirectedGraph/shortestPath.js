const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  return findPath(graph, nodeA, nodeB);
};

const findPath = (graph, nodeA, nodeB) => {
  const visited = new Set();
  const queue = [{ node: nodeA, weight: 0 }];
  while (queue.length) {
    const current = queue.shift();
    if (visited.has(current.node)) {
      continue;
    }
    visited.add(current.node);
    if (current.node === nodeB) {
      return current.weight;
    }
    for (let neightbour of graph[current.node]) {
      queue.push({ node: neightbour, weight: current.weight + 1 });
    }
  }
  return -1;
};
const buildGraph = (edges) => {
  const graph = {};
  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) {
      graph[a] = [];
    }
    if (!(b in graph)) {
      graph[b] = [];
    }
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};
