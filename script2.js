// -- States of a promise --
let createPendingPromise = () => {
    return new Promise((resolve, reject)=>{
        let resolvePromise = false;
        if(resolvePromise){
            resolve()
        }
    })
}

let showPendingPromise = () => {
    console.log(createPendingPromise())
}

let createResolvedPromise = () => {
    return new Promise((resolve, reject)=>{
        resolve()
    })
}

let showResolvedPromise = () => {
    console.log(createResolvedPromise())
}

// rejected promise is unfinished - need to be able to console log a promise obj with a rejected status
let createRejectedPromise = () => {
    return new Promise((resolve, reject)=>{
        if(1 == 2){
            resolve('1 equals 2 ..???')
        }
        reject(Error('1 does not equal 2'))
    }).catch(e => {})
}

let showRejectedPromise = () => {
    console.log(createRejectedPromise())
}



// -- Promises are non-blocking --
let wait1sec = () => {
    return new Promise((resolve, reject)=>{
        console.log('1 second wait initiated')
        setTimeout(()=>{
            console.log('1 second wait is over !')
        }, 1000)
        resolve()
    })
}


let wait5sec = () => {
    return new Promise((resolve, reject)=>{
        console.log('5 second wait initiated')
        setTimeout(()=>{
            console.log('5 second wait is over !')
        }, 5000)
        resolve()
    })
}
