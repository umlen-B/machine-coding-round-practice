// Uses stack
// 1. Take root push to stack
// 2. Pop from stack and take to current
// 3. Search Right not found push to stack
// 4. Search Left not found push to stack
// Keeping left on top of right helps in DFS
// 5. Now pop and repeat from 2
// 6. If stack is empty then data not found

// Given n number of nodes
// Big O -> O(n)
// Space -> O(n)

const depthFirstSearch = (root,val) => {
    if(!root) return false;
    const stack = [root]
    while(stack.length){
        const current = stack.pop()
        console.log('current.val', current.val)
        if(current.val === val){
            return true
        }
        if(current.right) { stack.push(current.right)}
        if(current.left) { stack.push(current.left)}
    }
    return false;
}

const depthFirstSearchRecurrsive = (root,val) => {
    if(!root) return false;
    console.log('root.val', root.val)
    if(root.val === val){
        return true
    }
    // if(root.left) { res = res || depthFirstSearchRecurrsive(root.left, val)}
    // if(root.right) { res = res || depthFirstSearchRecurrsive(root.right, val)}
    // return res;
    return depthFirstSearchRecurrsive(root.left, val) || depthFirstSearchRecurrsive(root.right, val)
}

export {depthFirstSearch, depthFirstSearchRecurrsive};