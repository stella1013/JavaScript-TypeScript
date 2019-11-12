// ##########  FUNCTIONAL PROGRAMMING  #############
/*
It's usual to:
1. pass function around(as parameters to other functions or returned as the result of some calculation)
2. to not use loops(opting for recursion)
3. skip side effects (such as modifying objects or global variables)
*/
// PROBLEM - Do Something Once

//Bad Solution #1 Hope for the best
<div>
<button id="billButton" onclick="billTheUser(some, sales, data)">Bill me</button>
<b>WARNING: PRESS ONLY ONCE, DO NOT PRESS AGAIN!!</b>
</div>

function billTheUser(some, sales, data) {
    window.alert("Billing the user...");
    // actually bill the user
}
/* Why is it bad?
1.lollolololol
*/

//Bad Solution #2 Use Global Flag

let clicked = false;

function billTheUser2(some, sales, data) {
    if (!clicked) {
        clicked = true;
        window.alert("Billing the user...");
        // actually bill the user
    }
}

/* Why is it bad?
1. Global Variable - could accidentally change it's value. true would make the form submit.
2. Must also remember to re-init variable to false when user starts buying again.
3. testing difficulties due to external variable.


*/

//Bad Solution #3 Remove the Handler

<button
    id="billButton"
    onclick="billTheUser3('billButton', some, sales, data)"
> ill me</button>;

function billTheUser3(buttonId, some, sales, data) {
    document.getElementById(buttonId).onclick = null;
    window.alert("Billing the user...");
    // actually bill the user
}

/* Why is it bad?
1. Code is tightly coupled to button. Not reuseable elsewhere
2. Must also remember to reset the handler or user can't do a second buy
3. testing difficulties due to having to provide DOM elements to test.
4. still using a global element -> onclick value


*/
//Bad Solution #4 Change the handle
//There's a good point to this solution: if the user clicks a second time, they'll get a warning not to do that, but they won't be billed again.

<button
    id="billButton"
    onclick="billTheUser4(some, sales, data)">Bill me</button>;

function alreadyBilled() {
    window.alert("Your billing process is running; don't click, please.");
}
function billTheUser4(some, sales, data) {
    document.getElementById('billButton').onclick = alreadyBilled;
    window.alert("Billing the user...");
    // actually bill the user
}

/* Why is it bad?
1. Code is tightly coupled to button. Not reuseable elsewhere
2. Must also remember to reset the handler or user can't do a second buy
3. testing difficulties due to having to provide DOM elements to test.
4. still using a global element -> onclick value


*/

//Bad Solution #5 Disable the Button
//A similar idea: instead of removing the event handler, disable the button, 

<button
    id="billButton"
    onclick="billTheUser4(some, sales, data)">Bill me</button>;

function alreadyBilled() {
    window.alert("Your billing process is running; don't click, please.");
}
function billTheUser5(some, sales, data) {
    document.getElementById('billButton').setAttribute("disabled", "true");
    window.alert("Billing the user...");
    // actually bill the user
}

/* Why is it bad?
1. Code is tightly coupled to button. Not reuseable elsewhere
2. Must also remember to reset the handler or user can't do a second buy
3. testing difficulties due to having to provide DOM elements to test.
4. still using a global element -> onclick value


*/
//Bad Solution #6 Redefine the Handler
//Instead of changing anything in the button, let's have the event handler change itself. 

<button
    id="billButton"
    onclick="billTheUser6(some, sales, data)">Bill me</button>;

function alreadyBilled() {
    window.alert("Your billing process is running; don't click, please.");
}
function billTheUser6(some, sales, data) {
    billTheUser = function() {};
    window.alert("Billing the user...");
    // actually bill the user
}

/* Why is it bad?
1. How do you set billTheUser back to it's original setting
2. testing difficulties due to having to provide DOM elements to test.
3. still using a global element -> billTheUser
*/

//Bad Solution #7 Use a local flag
//Use Immediately Invoked Function Expression IIFE. With this can use closure so 'clicked' is local to the function and not visible anywhere else...i.e. private. 

<button
    id="billButton"
    onclick="billTheUser7(some, sales, data)">Bill me</button>;

var billTheUser7 = (clicked =>{
    return (some, sales, data) => {
        if(!clicked){
            clicked = true;
            window.alert("Billing the user...");
            // actually bill the user
        }
    }
})(false);

/* Why is it bad?
1. Having to rework every function that needs to be called only once like this.
*/

//Solution: Functional Solution
/*
Should fulfill these requirements:
    1. The original function (the one that may be called only once) should do that thing, and no other
    2. We don't want to modify the original function in any way
    3. We need to have a new function that will call the original one only once
    4. We want a general solution that we can apply to any number of original functions

Can be done using a higher-order function.
The function called 'once' will receive a function as a parameter and return a new function which will work only once.

Pay close attention to the syntax! When the user clicks on the button, the function that gets called with the (some, sales, data) argument isn't billTheUser(), but rather the result of having called once() with billTheUser as a parameter. That result is the one that can be called only a single time.
*/

<button
    id="billButton"
    onclick="once(billTheUser8)(some, sales, data)">Bill me</button>;

    function billTheUser8(some, sales, data) {
        window.alert("Billing the user...");
        // actually bill the user
    }

const once = fn => {
    let done = false; // not calling it clicked as in solution 7 to use more general terms. Don't necessarily need a click on button to call the function

    return (...args) => { // returns function with some parameters
        if(!done){
            done = true; // set done before calling true. just in case the function throws an exception. of course if you don't want to disable the function unless it has successfully ended, then you can move the assignment below the fn() call.
            fn(...args); // now call the original function
        }
    }
}
