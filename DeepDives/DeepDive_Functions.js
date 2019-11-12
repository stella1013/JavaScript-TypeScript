// ##########  FUNCTIONS #############

/* Functions as first class objects you can do everything with functions, that you can do with other objects

4 Types of Functions
    Anonymous
    Immediately Invoked
    Named
    Constructor?

*/
//ARROW FUNCTIONS
// Shorter way to create Anonymous functions. Can be used in every way a classical function can be used except as a constructors.
const fact2 = n => {
    if (n === 0) {
        return 1;
    } else {
        return n * fact2(n - 1);
    }
};
console.log(fact2(5)); // also 120

//CLOSURES
// Closures are a way to implement data hiding (with private variables), which leads to modules and other nice features. 
// Functions can access local and global variables. but 

function newCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const nc = newCounter();
console.log(nc()); // 1
console.log(nc()); // 2
console.log(nc()); // 3

//MEMOIZATION