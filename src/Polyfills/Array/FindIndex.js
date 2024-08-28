function myFindIndex(callback){
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            return i;
        }
    }
    return -1;
}

Array.prototype.myFindIndex = myFindIndex;