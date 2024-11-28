/*
promise = object that encapsulates the result of an asynchronous 
          operations let  asynchronous methods return value like 
          synchronous methods "I Promise to return something 
          in the future"

          The STATE is pending then fulfilled or rejected
          the RESULT is what can be returned
          2 parts producing & consuming
*/

const promise = new Promise((resolve, reject) => {

    let fileLoaded = false

    if(fileLoaded)
    {
        resolve("File loaded")
    }
    else
    {
        reject("File not loaded")
    }
})

promise.then(value => console.log(value))
        .catch(error => console.log(error))