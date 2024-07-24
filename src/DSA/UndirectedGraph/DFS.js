import {graph} from './undirectedGraph'

// Uses Stack
// n nodes
// e edges
// Time: O(e)
// space: O(n)

// const visited = new Set();
export const depthFirstSearchRecurrsive = (graph, src,des, visited) => {
    if(src === des) return true;
    if(visited.has(src)) return false;
    visited.add(src) 
    for(let neighbour of graph[src]){
        if(depthFirstSearchRecurrsive(graph, neighbour, des, visited)){
            return true
        }
    }
    return false;
}
