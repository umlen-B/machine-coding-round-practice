
// Seems similar to count islands
// Uses Stack
// n nodes
// e edges
// Time: O(e)
// space: O(n)

const connectedComponents = (graph) => {
    let count = 0;
    const visited = new Set()
    for(let node in graph){
       if(explore(graph,node, visited)){
        count+=1
       }
    }
    return count;
}

const explore = (graph,current, visited) => {
    if(visited.has(String(current))) return false;
    visited.add(String(current))
    for(let neightbour of graph[current]){
        explore(graph, neightbour, visited)
    }
    return true
}