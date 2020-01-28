/**
 * Event Objects
 * Events typically transport Data
 * 
 * ###### Browser Event Objects ###### 
 * Various Events that can be listened to.
 * Core Event constructor functions and for specialized events specific constructor function events.
 * Event.target is a core funtion that is part of all events.
 * 
 * ######  Different Ways of listening to Events. ###### 
 * 1. addEventListener() 
 * 2. onclick="" - html attribute. old and shouldn't be used. hard to maintain. mixing js and html
 * 3.
 * 
 * 
 * ###### ADD EVENT LISTENERS
 * const button = document.querySelector('button');
 * 
 * button.onclick = function() {
 *  alert('one way as anonymous function');
 * }
 * or 
 * const buttonClickHandler = () => {
 *  alert('or with arrow function');
 * }
 * 
 * button.onclick = buttonClickHandler; //DOWNSIDE: only one handler per button click
 *  so use
 * 
 * BUT THIS WORKS BEST button.addEventListener('click', buttonClickHandler);
 * can be used to add multiple listeners for the same event
 * 
 * ###### REMOVING EVENT LISTENERS ###### 
 * button.removeEventListener('click', buttonClickHandler);
 *  
 * //////// PITFALLS ////////
 * 
 * button.addEventListener('click', ()=>{
 *  this can never be removed.
 * });
 * button.removeEventListener('click', ()=>{
 *  this and the one above are two different objects
 * use a named function
 * });
 * button.addEventListener('click', buttonClickHandler.bind(this)); creates a new function object
 * button.removeEventListener('click', buttonClickHandler.bind(this)); and creates another new function object
 * 
 * //////// PITFALLS ////////
 * 
 * BUT THIS WORKS
 * const bindFn = buttonClickHandler.bind(this);
 * button.addEventListener('click', bindFn);
 * button.removeEventListener('click', bindFn);
 * 
 * ###### EVENT OBJECT ###### 
 * 
 * preventDefault()
 * Prevents Default behavior, which on form is to send data from form to server/source of html file. which causes page to reload.
 * default behavior depends on type of event. i.e. link - navigating window.
 * 
 * Capturing and Bubbling (Event Propagation Behavior)
 * Events have 2 phases.. 
 * 1. Capturing - outside to inside. checks for capturing function on containers. exteriors fire first.
 * 2. Bubbling - inside to outside. checks for bubbling function on containers. interiors fire first.
 * 
 * By default all listeners are registered on the BUBBLING PHASE.
 * 
 * CHANGE TO CAPTURING PHASE
 * add third argument to true.
 * button.addEventListener('click', bindFn, true)
 * 
 * STOP PROPAGATION
 * stopPropagation()
 * event.stopPropagation() - stops propagtion from hitting anscestor event listeners
 * 
 * stopImmediatePropagation() - stops multiple listeners on same element
 * 
 * ###### EVENT DELEGATION PATTERN ###### 
 * 
 * takes advantage of the default bubbling behavior of JS.
 *  //////// PITFALLS ////////
 * const list = document.querySelector('ul');
 * 
 * list.addEventListener('click', event => {
 * event.target.classList.toggle('highlight');
 * })
 * 
 * //problems could be event.target if there are more than <li></li> in <ul></ul>
 * // event.current target will refer to <ul> </ul> where listener is registered.
 *  //////// PITFALLS ////////
 *  //////// THIS WORKS BEST ////////
 * //to fix can use DOM Traversal and event target.
 * const list = document.querySelector('ul');
 * 
 * list.addEventListener('click', event => {
 * event.target.closest('li').classList.toggle('highlight'); // closest will even give <li></li> itself.
 * });
 * 
 * ###### TRIGGERING EVENTS PROGRAMMATICALLY ###### 
 * button.addEventListener('click', event => {
 * submit button summitting form;
 * });
 * 
 * form.addEventListener('submit', event => {
 * summitting form;
 * });
 * 
 * list.addEventListener('click', event => {
 * event.target.closest('li').classList.toggle('highlight'); // closest will even give <li></li> itself.
 * --> form.submit();
 * });
 * can be useful but be aware that the above is not the same as a click. use button.click();
 * 
 * 
 * * ###### EVENT HANDLER FUNCTIONS & THIS ###### 
 * inside function this refers to whereever the event is registered. event.current.target. unless using an arrow function
 */
// ###### INFINITE SCROLL ###### 
let curElementNumber = 0;
 
function scrollHandler() {
    const distanceToBottom = document.body.getBoundingClientRect().bottom;
 
    if (distanceToBottom < document.documentElement.clientHeight + 150) {
        const newDataElement = document.createElement('div');
        curElementNumber++;
        newDataElement.innerHTML = `<p>Element ${curElementNumber}</p>`;
        document.body.append(newDataElement);
    }
}
 
window.addEventListener('scroll', scrollHandler);