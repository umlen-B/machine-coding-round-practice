Array.prototype.mySort = function(comparator){
    comparator = comparator || function(a,b){
        return a-b
    }

    const merge = (left, right, comparator) => {
        let res = [], i=0, j=0;
        while(i<left.length && j< right.length){
            if(comparator(left[i],right[j]) <=0){
                res.push(left[i]);
                i++
            } else {
                res.push(right[j]);
                j++
            }
        }

        return res.concat(left.slice(i)).concat(right.slice(j));
        
    }

    const mergeSort = (arr, comparator) => {
        if(arr.length <= 1){
            return arr;
        }
        const mid = Math.floor(arr.length/2);
        const left = mergeSort(arr.slice(0,mid), comparator);
        const right = mergeSort(arr.slice(mid), comparator);
        return merge(left,right,comparator);
    }

    const sortedArray = mergeSort(this, comparator);
    for(let i=0;i<this.length;i++){
        this[i] = sortedArray[i];
    }
    return this;
}

const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
arr.mySort((a, b) => a - b);
console.log(arr);