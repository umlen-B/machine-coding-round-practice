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

Promise.prototype.myAllSettled = myAllSettled