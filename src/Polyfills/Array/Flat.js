function myFlat(depth=1){
    let newArr = [];
    for(let i = 0; i < this.length; i++){
        if(depth > 0 && Array.isArray(this[i])){
            newArr.push(...this[i].myFlat(depth - 1))
        } else {
            newArr.push(this[i])
        }
    }
    return newArr;
}

Array.prototype.myFlat = myFlat;