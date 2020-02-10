/**
 * Async, Promises, Callbacks
 * Javascript is single threaded.
 * Browsers are not single threaded. so callbacks() can be passed off to browser. Adding an event listener is handed off to the browswer to handle listening for user's click so event listener doesn't  hold up all scripts
 * 
 * button.addEventListener('click', trackUserHandler);
 * 
 * Blocking Code and the event loop
 * 
 * 
 * for(let i=0; i< 1000000; i++){
 * result += i;
 * }
 * 
 * console.log(result);
 * 
 * for loop is not handed off to broswers. so click will only appear after the loop is done. Even if the event lister is hadded off to browser. handed off tasks can only be run after looops finish. browser understands a click happend but javascript only shows the click after for loop ends
 * The concept is called the Event loop. So the for loop being in the call stack the click goes into message queue and will only show after result. see Event Loop Below.
 * 
 * Event Loop - helps us deal with async code and call back functions. 
 * 
 * code
 * const greet = () =-> {
 * console.log('hi')
 * 
 * const.showAlert = () => {
 * alert('Danger');
 * 
 * setTimeout(showAlert, 2000) <-- timer is offloaded to browser . it's a browser api. so timer runs while other javascritp runs.
 * 
 * greet();}
 * 
 * if showAlert fires at the same time as a console.log a message queue is generate and adds any functions/todo once the javascript engine has time for it.
 * showAlert doesn't fire until the console.log and call stack is empty.
 * Event loop, Queue and Async Code
 * Message Queue provided by the browser
 * 
 * Event loop built into browser (or host environement) - runs all time checking stack for pending todo functions into the call stack.
 * when empty it moves another function into call stack.
 * 
 * navigator.geolocation.getCurrentPosition(); <--- browser api
 * 
 * setTimeout(0)
 */
const setTimer = (duration) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('Done'); // <-- coming from js engine.
        }, duration);
    });
    return promise;
   
}
navigator.geolocation.getCurrentPosition(posData =>{
    setTimer(2000).then(data => {
        console.log(data, posData);})
    },
error=>{
    console.log(error);
});

/**
 * if we need to promisify something. make a promise out of a function. lets you promise chanining.
 */
const getPosition = opts => {
    const promise = new Promise((resolve, reject)=>{
    navigator.geolocation.getCurrentPosition(
    success=>{
        resolve(success);
    },
    error => {
        reject(error);
    }, opts);
return promise;

});
}

getPosition()
.then(posData =>{
positionData = posData;
return setTimer(2000);
})
.catch((err)=>{
    console.log(err);
});

//adding catch at the end. it skps all previous. if skip added to middle any then after catch will execute. allows strutcture chains to crash entirely or not.
//finally
/* 
Promise States & "finally"
You learned about the different promise states:

PENDING => Promise is doing work, neither then() nor catch() executes at this moment

RESOLVED => Promise is resolved => then() executes

REJECTED  => Promise was rejected => catch() executes

When you have another then() block after a catch() or then() block, the promise re-enters PENDING mode (keep in mind: then() and catch() always return a new promise - either not resolving to anything or resolving to what you return inside of then()). Only if there are no more then() blocks left, it enters a new, final mode: SETTLED.

Once SETTLED, you can use a special block - finally() - to do final cleanup work. finally() is reached no matter if you resolved or rejected before.

Here's an example:

somePromiseCreatingCode()
    .then(firstResult => {
        return 'done with first promise';
    })
    .catch(err => {
        // would handle any errors thrown before
        // implicitly returns a new promise - just like then()
    })
    .finally(() => {
        // the promise is settled now - finally() will NOT return a new promise!
        // you can do final cleanup work here
    });
You don't have to add a finally() block (indeed we haven't in the lectures). */


/**
 * ASYNC/WAIT
 * Alternative syntax that still utilizes promises. 
 * async/await can only be used with functions
 */
 async function asyncFunction(){
     //automatically returns a promise
    const pos =  await getPosition();
    const timerData =  await setTimer();
    console.log(pos, timerData);
 }

console.log(asyncFunction());

//How to get error handling back. can try catch it.
async function asyncFunctionErrror(){
    //automatically returns a promise
    try {
        const pos =  await getPosition();
        const timerData =  await setTimer();
    }catch(error){
        console.log(error);
    }
  
   console.log(pos, timerData);
}

/**
 * cant run simultaneous tasks with ...await wraps all blocks in it's own then block. not good if need some simultaneousfunctioncs... because everything runs after each other.
 * another downside is that async/await can aonly be used with functions. could use an IIFE if needed.
 * 
 * Promise.all()
 * //pass in array of promises...data will be combined data of other promises.
 * Promise.race()
 * //good for onlywanting the first finisehd promise and ignore the others
 */