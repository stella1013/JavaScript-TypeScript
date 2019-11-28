// ##########  FUNCTIONS #############

/**
 * The concept of first-class objects means that functions can be created, assigned, changed, passed as parameters, or returned as result of yet other functions, in the very same way that you can do with, say, numbers or strings.
 * Parameters = Potential
 * Arguments = Actual
 * 
 * 
 * LAMDAS 
 * Lamdas calculus terms a function
 * 
 */
 
 function xyzzy(...) { ... }
 //(almost the same as )
 var xyzzy = function(...) { ... }
 /* Except for hoisting. JS moves all definitions to the top of the current scope, but not assignments; so, with the first definition you can invoke xyzzy(...) from any place in your code, but with the second you cannot invoke the function until the assignment has been executed.
 */
/* Functions as first class objects you can do everything with functions, that you can do with other objects

Ways to defined a function.
    1. a named function declaration: function first(...) {...};
    2. an anonymous function expression: const second = function(...) {...};
    3. a named function expression: const third = function someName(...) {...};
    4. an immediately-invoked expression: const fourth = (function() { ...; return function(...) {...}; })(); 
    5. NOT SAFE - a function constructor: const fifth = new Function(...);
    6. an arrow function: const sixth = (...) => {...};
    7 maybe: object method declarations.
    8 maybe: JS also allows defining generator functions as in function*(...) {...} that actually return a Generator object
    9 maybe: async functions that really are a mix of generators and promises. We won't be using these kinds of functions, but read more about them

*/
//6. ARROW FUNCTIONS
// Shorter way to create Anonymous functions. Can be used in every way a classical function can be used except as a constructors.

// ARROW FUNCTION DIFFERENCES 
/**
 * 
 * Arrow Functions can implicitly return a value
 * The value of 'this' is not bound
 * There is no arguments object.
 * Cannot be used as constructors
 * Do not have a 'prototype' property
 * cannot be used as generator because they don't allow 'yield' keyword.
 */
const fact2 = n => {
    if (n === 0) {
        return 1;
    } else {
        return n * fact2(n - 1);
    }
};
console.log(fact2(5)); // also 120


//THIS
function ShowItself1(identity) {
    this.identity = identity;
    setTimeout(function() {
        console.log(this.identity);
    }, 1000);
}

var x = new ShowItself1("Functional");
// after one second, undefined is displayed

/**
 * In the above function...by the time the 'timeout' function is called 'this' will point to the global(window) variable instead of the new object so you'll get an 'undefined'
 * 
 * 
 * 3 Ways to solve this
 * - Use a closure and define a local variable(usually named that or self) which will ge the original value of 'this'
 * - Use .bind(), 
 * - just use an arrow function.
 */
function ShowItself2(identity) {
    this.identity = identity;
    let that = this;
    setTimeout(function() {
        console.log(that.identity);
    }, 1000);

    setTimeout(
        function() {
            console.log(this.identity);
        }.bind(this),
        2000
    );

    setTimeout(() => {
        console.log(this.identity);
    }, 3000);
}







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

//4. IMMEDIATELY INVOKED FUNCTIONS
/**
 * immediately invoked expression lets you use a closure. An inner function can use variables or other func
 */
var myCounter = (function(initialValue = 0) {
    let count = initialValue;
    return function() {
        count++;
        return count;
    };
})(77);

myCounter(); // 78
myCounter(); // 79
myCounter(); // 80

/**
 * Study the code carefully: the outer function receives an argument (77, in this case) that is used as count's initial value (if no initial value is provided, we start at zero). The inner function can access count (because of the closure), but the variable cannot be accessed anywhere else. In all aspects, the returned function is a common function; the only difference is its access to private elements. This is also the base of the module pattern.
 */

 /**
  * 5. -------- NOT SAFE -----FUNCTION CONSTRUCTOR -------- NOT SAFE
  */
  var sum3 = new Function("x", "y", "z", "var t = x+y+z; return t;");
    sum3(4, 6, 7); // 17
 
    /* The fifth definition isn't safe, and you shouldn't use it! 
    You pass the arguments names, and then the actual function body as a string in the last argument -- and the equivalent of eval() is used to create the function, which could allow for many dangerous hacks, so don't do this! 

    This sort of definition is not only unsafe, but has some other quirks, such as not creating closures with their creation contexts, and always being global instead.
 */
//CURRYING

const altsum3 = x => y => z => x + y +z;

altsum3(1)(2)(3); //6

//this is how it is calculated by the JS interpreter
let fn1 = altSum3(1); // let fn1 = y => z => 1 + y + z;
let fn2 = fn1(2); // let fn2 = z => 1 + 2 + z;
let fn3 = fn2(3); // let fn2 = z => 1 + 2 + 3;
//and a value is finally returned

console.log(altsum3(1)(2)(3));
//MEMOIZATION


///AN UNNECESSARY MISTAKE
fetch("some/remote/url").then(function(data) {
    processResult(data);
});
//What does this do?
/**
 * 1. URL is fetched
 * 2. when data arrives a function is called
 * 3. this function calls processResult with 'data' as an argument
 */

//CAN be written like this. in Lambda terms an eta reduction. other way eta abstraction.
fetch("some/remote/url").then(processResult);
//This code is exactly equivalent to the previous way (or, infinitesimally quicker, since you avoid one function call) but simpler to understand... or not? 

//Howevr converting this 
fetch("some/remote/url").then(function(data) {
    myObject.store(data);
});
//to this will fail:
fetch("some/remote/url").then(myObject.store);

//Why? in the original code the method is bound to object(myObject) but in the modified version it isn't bound but free.
//bind() to the rescue
fetch("some/remote/url").then(myObject.store.bind(myObject));

//Code like this
function doSomeMethod(someData) { 
    return someObject.someMethod(someData);
}
//Should be converted to this.
const doSomeMethod = someObject.someMethod.bind(someObject);