import {adjacencyMatrix} from './directedGraph'

// Uses Stack
// n nodes
// e edges
// Time: O(e)
// space: O(n)

// Given graph is acyclic
const depthFirstSearchRecurrsive = (src,des) => {
    if(src === des) return true;
    // Below if is not required as loop won't run as return false at end
    // if(!adjacencyMatrix[src].length) return false; 
    for(let neighbour of adjacencyMatrix[src]){
        if(depthFirstSearchRecurrsive(neighbour, des)){
            return true
        }
    }
    return false;
}