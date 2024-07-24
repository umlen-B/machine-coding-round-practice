const depthFirstSumRecurrsive = (root,val) => {
    if(root === null) return 0;
    console.log('root.val', root.val)
    return root.val + depthFirstSumRecurrsive(root.left, val) + depthFirstSumRecurrsive(root.right, val)
}

const breadthFirstSum = (root) => {
    if(root === null) return 0;
    let sum =0;
    const queue = [root];
    while(queue.length){
        const current = queue.shift();
        sum+=current.val;
        if(current.left) {queue.push(current.left)};
        if(current.right) {queue.push(current.right)};
    }
    return sum;
}