function myMap (callback){
    let newArr = [];
    for(let i = 0; i < this.length; i++){
        newArr.push(callback(this[i], i, this))
    }
    return newArr;
}

Array.prototype.myMap = myMap