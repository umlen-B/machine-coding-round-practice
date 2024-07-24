const depthFirstMinRecurrsive = (root,val) => {
    if(root === null) return Infinity;
    console.log('root.val', root.val)
    return Math.min(root.val, depthFirstMinRecurrsive(root.left, val), depthFirstMinRecurrsive(root.right, val))
}