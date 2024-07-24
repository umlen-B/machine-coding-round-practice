const largetComponent = (graph) => {
    let largestSize = 0;
    let largest = 0;
    for(let node in graph){
        largest = Math.max(largest, explore(graph, node, visited, 0))
        largestSize = Math.max(largest, exploreSize(graph, node, visited))
    }
    console.log('largest',largest)
    console.log('largestSize',largestSize)
    return largestSize
}

const explore = (graph, current, visited, size) => {
    if(visited.has(current)) return size;
    visited.add(current);
    size+=1;
    for(let neightbour in graph[current]){
        size = Math.max(size, explore(graph, neightbour, visited, size))
    }
    return size;
}

const exploreSize = (graph, current, visited) => {
    if(visited.has(current)) return 0;
    visited.add(current);
    let size =1;
    for(let neightbour in graph[current]){
        size += exploreSize(graph, neightbour, visited, size)
    }
    return size;
}