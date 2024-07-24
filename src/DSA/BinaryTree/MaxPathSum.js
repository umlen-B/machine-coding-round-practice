const depthFirstMaxPathSumRecurssive = (root) => {
    if(root === null) return -Infinity
    if(root.left === null && root.right === null) return root.val;
    return root.val + Math.max(depthFirstMaxPathSumRecurssive(root.left), depthFirstMaxPathSumRecurssive(root.right))
}