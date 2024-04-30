function myBind(context, ...args){
    context = context || window;
    context.fn = this;
    return function (...args1){return context.fn(...args, ...args1)}
}

Function.prototype.myBind = myBind;