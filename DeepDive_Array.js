// ##########  ARRAYS #############
//creating arrays by doing equals instead of push am i just reassigning this array. what does this do for  memory. it doens't work anyway. accessing arrays and block scoping for, if, function return item in arrray. adding multiple items at once to array. should i reassign to a different array?

/*
Arrays are high level list-like objects whose prototype has methods to perform traversal and mutation operations. 

Neither the length of a JavaScript array nor the types of its elements are fixed. Since an array's length can change at any time, and data can be stored at non-contiguous locations in the array, */

var fruits = ['Apple', 'Banana'];
console.log(fruits.length); // 2


/*JavaScript arrays are not guaranteed to be dense; this depends on how the programmer chooses to use them. In general, these are convenient characteristics; but if these features are not desirable for your particular use, you might consider using typed arrays.
*/


// ##########  ACCESS (INDEX INTO) ELEMENTS IN ARRAY  #############
// Only Bracket notation can be used. Using Dot Notation throws a syntax error.
var first = fruits[0];
// Apple

var last = fruits[fruits.length - 1];
// Banana

// ##########  LOOP OVER ELEMENTS IN ARRAY  #############
fruits.forEach(function(item, index, array) {
    console.log(item, index);
  });
  // Apple 0
  // Banana 1

// ##########  COPY ARRAY  #############
var shallowCopy = fruits.slice(); // ["Strawberry", "Mango"]; this is how to make a copy

// ##########  ADDING/REMOVE ELEMENTS TO ARRAY USING BUILT IN METHODS  #############
var newLength = fruits.push('Orange'); // ["Apple", "Banana", "Orange"]add to the end
var newLength = fruits.unshift('Strawberry');  // ["Strawberry", "Banana"]; add to the front
var last = fruits.pop(); // ["Apple", "Banana"]; remove Orange (from the end)
var first = fruits.shift(); // ["Banana"]; remove Apple from the front


// ##########  ADDING/REMOVE ELEMENTS TO ARRAY USING INDEX  #############
fruits.push('Mango'); // ["Strawberry", "Banana", "Mango"]

var pos = fruits.indexOf('Banana'); // 1
var removedItem = fruits.splice(pos, 1); // this is how to remove an item // ["Strawberry", "Mango"]


console.log(vegetables); 
// ["Cabbage", "Turnip", "Radish", "Carrot"]

var pos = 1, n = 2;

var removedItems = vegetables.splice(pos, n); 
// this is how to remove items, n defines the number of items to be removed,
// from that position(pos) onward to the end of array.

console.log(vegetables); 
// ["Cabbage", "Carrot"] (the original array is changed)

console.log(removedItems); 
// ["Turnip", "Radish"]


/*

Arrays cannot use strings as element indexes (as in an associative array) but must use integers. Setting or accessing via non-integers using bracket notation (or dot notation) will not set or retrieve an element from the array list itself, but will set or access a variable associated with that array's object property collection. The array's object properties and list of array elements are separate, and the array's traversal and mutation operations cannot be applied to these named properties.

*/

// ##########  CREATING AN ARRAY #############
/*
Array is created in 3 Ways
    [element0, element1, ..., elementN]
    new Array(element0, element1[, ...[, elementN]])
    new Array(arrayLength)
*/
var myArr = ['elemen1', 'elemen2', 'elemen3'];
var myArr2 = new Array('elemen1', 'elemen2', 'elemen3');
var myArr3 = new Array(3);


// ##########  PARAMATERS & LENGTH  #############
/*
ELEMENTN
A JavaScript array is initialized with the given elements, except in the case where a single argument is passed to the Array constructor and that argument is a number (see the arrayLength parameter below). Note that this special case only applies to JavaScript arrays created with the Array constructor, not array literals created with the bracket syntax.

ARRAYLENGTH
If the only argument passed to the Array constructor is an integer between 0 and 232-1 (inclusive), this returns a new JavaScript array with its length property set to that number (Note: this implies an array of arrayLength empty slots, not slots with actual undefined values). If the argument is any other number, a RANGEERROR exception is thrown.

*/
var fruits = ['Apple', 'Banana'];
var moreFruits = new Array('Plum')
console.log(fruits.length);
/*

JavaScript arrays are zero-indexed: the first element of an array is at index 0, and the last element is at the index = array.length - 1. Using an invalid index number returns UNDEFINED.

Array elements are object properties in the same way that toString is a property, but trying to access an element of an array as follows throws a syntax error because the property name is not valid:

*/
var arr = ['this is the first element', 'this is the second element', 'this is the last element'];
console.log(arr[0]);              // logs 'this is the first element'
console.log(arr[1]);              // logs 'this is the second element'
console.log(arr[arr.length - 1]); // logs 'this is the last element'

//ASSOCIATIVE ARRAY
//https://www.i-programmer.info/programming/javascript/1441-javascript-data-structures-the-associative-array.html
