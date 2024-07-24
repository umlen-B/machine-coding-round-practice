// edge list
export const edges = [
    [i, j],
    [k, i],
    [m, k],
    [k, l],
    [o, n]
]

// convert to adjacency list
export const graph = {
    i: ['j', 'k'],
    j: ['i'],
    k: ['i', 'm', 'l'],
    m: ['k'],
    l: ['k'],
    o: ['n'],
    n: ['o']
}

// function to convert edge list to adjacency list
 export const buildAdjacencyFromEdges = (edges) => {
    const graph = {}
    for(let edge of edges){
        const [a, b] = edge;
        if(!(a in graph)) graph[a] = []
        if(!(b in graph)) graph[b] = []
        graph[a].push(b)
        graph[b].push(a)
    }
    return graph
 }


/*
Here is the graph
➡️⬅️⬆️⬇️↗️↘️↙️↖️

 I   ⬅️➡️    J   

⬆️
⬇️

 K   ⬅️➡️    L

⬆️
⬇️

 M


 O   ⬅️➡️    N 
*/