let promiseTodoThing = new Promise(function(resolve, reject){
    // cleaning the room

    let doneThing = true;

    if(doneThing){
        resolve('done');
    } else {
        reject('not done');
    }
})


promiseTodoThing.then(function(fromResolve){
    console.log('the thing is ' + fromResolve)
}).catch(function(fromReject){
    console.log('the thing is ' + fromReject)

})


let promiseTodoFirstThing = function(p) {
    return new Promise(function(resolve, reject){
        // do first thing
        resolve('first thing done')
    })
}

let promiseTodoSecondThing = function(message) {
    return new Promise(function(resolve, reject){
        // do second thing
        resolve(message + ', second thing done')
    })
}

let promiseTodoThirdThing = function(message) {
    return new Promise(function(resolve, reject){
        // do third thing
        resolve(message + ', third thing done')
    })
}

promiseTodoFirstThing()
.then(function(result){
    return promiseTodoSecondThing(result);
})
.then(function(result){
    return promiseTodoThirdThing(result);
})
.then(function(result){
    console.log('finished! ' + result)
})

Promise.all([promiseTodoFirstThing(), promiseTodoSecondThing(), promiseTodoThirdThing()])
.then(function(){
    console.log('All finished!')
})

Promise.race([promiseTodoFirstThing(), promiseTodoSecondThing(), promiseTodoThirdThing()])
.then(function(){
    console.log('One of them is finished!')
})