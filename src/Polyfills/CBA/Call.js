function myCall(context,...args){
    context = context || window
    context.fn = this
    let result = context.fn(...args)
    delete context.fn
    return result
}

Function.prototype.myCall = myCall;