import {adjacencyMatrix} from './directedGraph'

// Uses Queue
// n nodes
// e edges
// Time: O(e)
// space: O(n)

// Given graph is acyclic
const breadthFirstSearch = (src,des) => {
    const queue = [src]
    while(queue.length){
        const current = queue.shift()
        if(current === des) return true;
        for(let neighbour of adjacencyMatrix[current]){
            queue.push(neighbour)
        }
    }
    return false;
}