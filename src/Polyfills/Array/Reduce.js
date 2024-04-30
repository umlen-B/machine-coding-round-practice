function myReduce(callback, initialValue){
    let accumulator = initialValue ? initialValue : this[0];
    let index = initialValue ? 0 : 1;
    for(index; index < this.length; index++){
        accumulator = callback(accumulator, this[index], index, this);
    }
    return accumulator;
}

Array.prototype.myReduce = myReduce