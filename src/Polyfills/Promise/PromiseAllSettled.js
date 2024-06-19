const myAllSettled = (promises) => {
    // map the promises to return custom response.
    const mappedPromises = promises.map(
      p => Promise.resolve(p)
      .then(
        val => ({ status: 'fulfilled', value: val }),
        err => ({ status: 'rejected', reason: err })
      )
    );
  
    // run all the promises once with .all 
    return Promise.all(mappedPromises);
  }

  const myAllSettled1 = (promises) => {
    return new Promise((resolve) => {
      let result = [];
      let count = 0;
      for(let i=0; i<promises.length; i++){
          Promise.resolve(promises[i]).then(res => {
              count++;
              result[i] = { status: 'fulfilled', value: res };
              if(count === promises.length){
                  resolve(result);
              }
          }).catch(err => {
            count++;
            result[i] = { status: 'rejected', value: err };
            if(count === promises.length){
              resolve(result);
            }
          })
      }
  })
  }

Promise.myAllSettled = myAllSettled