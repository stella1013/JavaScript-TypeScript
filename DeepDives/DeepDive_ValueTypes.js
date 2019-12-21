//The Primitive

/**
 * In JavaScript a primitive is data that is not an object and has no methods.
 * There are 7 primitive data types
 * string
 * number
 * bigint
 * boolean
 * null
 * undefined
 * symbol
 * 
 * most of the time a primitive value is represented directly at the lowest level of the language implementation.
 * 
 * All primitives are immutable..they cannot be altered.
 * 
 * The variable may be assiagne a nnew value but the existing value cannot be changed in the ways objects, arrays, and functions can.
 
 */
// Using a string method doesn't mutate the string
var bar = "baz";
console.log(bar);               // baz
bar.toUpperCase();
console.log(bar);               // baz

// Using an array method mutates the array
var foo = [];
console.log(foo);               // []
foo.push("plugh");
console.log(foo);               // ["plugh"]

// Assignment gives the primitive a new (not a mutated) value
bar = bar.toUpperCase();       // BAZ

// The Primitive 
let foo = 5;

// Defining a function that should change the Primitive value
function addTwo(num) {
   num += 2;
}
// Another function trying to do the same thing
function addTwo_v2(foo) {
   foo += 2;
}

// Calling our first function while passing our Primitive as an argument
addTwo(foo);
// Getting the current Primitive value
console.log(foo);   // 5

// Trying again with our second function...
addTwo_v2(foo);
console.log(foo);   // 5


/*Primitive wrapper objects in JS
Except for null and undefined, all primitive values have object equivalient that wrap around the primitive values
String
Number
BigInt
Boolean
Symbol

The wrapper's valueOf() method returns the primitive value.
*/

/**
 * Pass by Reference
 * JS doesn't have pointers.The programmer cannot access any C-like "value" representing the address of an object.

Within a function, one may change the contents of a passed object via that reference, but you cannot modify the reference that the caller had because your reference is only a copy:
 */

var foo = {'bar': 1};

function tryToMungeReference(obj) {
    obj = {'bar': 2};  // won't change caller's object
}

function mungeContents(obj) {
    obj.bar = 2;       // changes _contents_ of caller's object
}

tryToMungeReference(foo);
foo.bar === 1;   // true - foo still references original object

mungeContents(foo);
foo.bar === 2;  // true - object referenced by foo has been modified