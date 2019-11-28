const once = fn => {
    let done = false; // not calling it clicked as in solution 7 to use more general terms. Don't necessarily need a click on button to call the function

    return (...args) => { // returns function with some parameters
        if(!done){
            done = true; // set done before calling true. just in case the function throws an exception. of course if you don't want to disable the function unless it has successfully ended, then you can move the assignment below the fn() call.
            fn(...args); // now call the original function
        }
    }
}


const onceAndAfter = (f, g) => {
    let done = false;
    return (...args) => {
        if (!done) {
            done = true;
            f(...args);
        } else {
            g(...args);
        }
    };
};

const onceNoExtraVar = (f) => {
    return (...args) => {
            f && f(...args);
            f=null;
    };
};
const onceAndAfterAlternate= (f, g) => {
    return (...args) => {
           f(...args);
           [f, g] = [g, f];
            
    };
};

const onceLimit = (f, limit) => {
    return (...args) => {
        if(limit > 0){
            limit--;
            return f(...args);
        }
    };
};