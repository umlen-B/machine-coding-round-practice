Promise.myAll = function(promises){
    return new Promise((resolve,reject) => {
        let count = 0
        let result = new Array(promises.length)
        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(res => {
                result[index] = res;
                count++
                if(count === promises.length){
                    resolve(result)
                }
            }).catch(err => reject(err))
        })
    })
}

Promise.myAllSettled = function(promises){
    return new Promise((resolve,reject) => {
        let count =0;
        let result = new Array(promises.length)
        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(res => {
                result[index] = {status: 'fulfilled',  value: res}
                count++
                if(count === promises.length){
                    resolve(result)
                }
            }).catch(err => {
                result[index] = {status: 'rejected',  value: err}
                count++
                if(count === promises.length){
                    resolve(result)
                }
            })
        })
    })
}
// Promise.myRace
// Promise.myAny