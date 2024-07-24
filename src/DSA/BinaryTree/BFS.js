// Uses queue
// 1. Take root push to queue
// 2. Pop from queue and take to current
// 3. Search Left not found push to queue
// 4. Search Right not found push to queue
// Keeping left on top of right helps in DFS
// 5. Now pop and repeat from 2
// 6. If queue is empty then data not found

// Given n number of nodes
// Big O -> O(n)
// Space -> O(n)

const breadthFirstSearch = (root, val) => {
    if(!root) return false;
    const queue = [root]
    while(queue.length){
        const current = queue.shift()
        console.log('current.val', current.val)
        if(current.val === val){
            return true
        }
        if(current.left) { queue.push(current.left)}
        if(current.right) { queue.push(current.right)}
    }
    return false;
}


export {breadthFirstSearch};