function myPromiseAll(promises){
    return new Promise((resolve, reject) => {
        let result = [];
        let count = 0;
        for(let i=0; i<promises.length; i++){
            Promise.resolve(promises[i]).then(res => {
                count++;
                result[i] = res;
                if(count === promises.length){
                    resolve(result);
                }
            }).catch(err => {
                reject(err);
            })
        }
    })
}

Promise.myPromiseAll = myPromiseAll;