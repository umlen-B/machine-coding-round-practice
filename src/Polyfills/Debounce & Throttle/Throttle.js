function throttle(callback,delay){
    let shouldWait = false
    return (...args) => {
        if(shouldWait){
            return
        }
        callback(...args)
        shouldWait = true
        setTimeout(() => {
            shouldWait = false
        },delay)
    }
}