// ##########  ARRAYS #############
//creating arrays by doing equals instead of push am i just reassigning this array. what does this do for  memory. it doens't work anyway. accessing arrays and block scoping for, if, function return item in arrray. adding multiple items at once to array. should i reassign to a different array?

/*
Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations. Neither the length of a JavaScript array nor the types of its elements are fixed. Since an array's length can change at any time, and data can be stored at non-contiguous locations in the array, JavaScript arrays are not guaranteed to be dense; this depends on how the programmer chooses to use them. In general, these are convenient characteristics; but if these features are not desirable for your particular use, you might consider using typed arrays.

Arrays cannot use strings as element indexes (as in an associative array) but must use integers. Setting or accessing via non-integers using bracket notation (or dot notation) will not set or retrieve an element from the array list itself, but will set or access a variable associated with that array's object property collection. The array's object properties and list of array elements are separate, and the array's traversal and mutation operations cannot be applied to these named properties.

*/

// CREATING AN ARRAY
/*
[element0, element1, ..., elementN]
new Array(element0, element1[, ...[, elementN]])
new Array(arrayLength)

Parameters
elementN
A JavaScript array is initialized with the given elements, except in the case where a single argument is passed to the Array constructor and that argument is a number (see the arrayLength parameter below). Note that this special case only applies to JavaScript arrays created with the Array constructor, not array literals created with the bracket syntax.
arrayLength
If the only argument passed to the Array constructor is an integer between 0 and 232-1 (inclusive), this returns a new JavaScript array with its length property set to that number (Note: this implies an array of arrayLength empty slots, not slots with actual undefined values). If the argument is any other number, a RangeError exception is thrown.

*/
var fruits = ['Apple', 'Banana'];
var moreFruits = new Array('Plum')
console.log(fruits.length);

// ACCESSING (INDEX INTO) ARRAY
/*
JavaScript arrays are zero-indexed: the first element of an array is at index 0, and the last element is at the index equal to the value of the array's length property minus 1. Using an invalid index number returns undefined.

Array elements are object properties in the same way that toString is a property, but trying to access an element of an array as follows throws a syntax error because the property name is not valid:


*/
var arr = ['this is the first element', 'this is the second element', 'this is the last element'];
console.log(arr[0]);              // logs 'this is the first element'
console.log(arr[1]);              // logs 'this is the second element'
console.log(arr[arr.length - 1]); // logs 'this is the last element'

// ADD/EDIT/REMOVE PROPERTY

//LENGTH
/*


//PARAMETERS

/*
Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations. Neither the length of a JavaScript array nor the types of its elements are fixed. Since an array's length can change at any time, and data can be stored at non-contiguous locations in the array, JavaScript arrays are not guaranteed to be dense; this depends on how the programmer chooses to use them. In general, these are convenient characteristics; but if these features are not desirable for your particular use, you might consider using typed arrays.

Arrays cannot use strings as element indexes (as in an associative array) but must use integers. Setting or accessing via non-integers using bracket notation (or dot notation) will not set or retrieve an element from the array list itself, but will set or access a variable associated with that array's object property collection. The array's object properties and list of array elements are separate, and the array's traversal and mutation operations cannot be applied to these named properties.*/

//ASSOCIATIVE ARRAY
//https://www.i-programmer.info/programming/javascript/1441-javascript-data-structures-the-associative-array.html
