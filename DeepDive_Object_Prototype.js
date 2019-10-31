
// ##########  OBJECTS #############

var person ={
  name: "Veronica",
  age: 27,
  "occupation-g": "assistant", //property names/keys can be strings too. can use hyphens
  details: {
      hobbies: ['sports', 'cooking'],
      location: 'germany'
  },
  greet: function(){
      console.log('Hello, I am ' + this.name); //var greet = function(){} comparable to this.
  }
}
// ACCESSING PROPERTIES
var field = 'name';
console.log(person.name);
console.log(person["name"]);
console.log(person[field]);
console.log(person.details.hobbies);
person.greet();

// ACCESSING PROPERTY TYPES
console.log(typeof person.name);
console.log(person["occupation-g"]);

// ADD/EDIT PROPERTY
person.name = 'Anna';
console.log(person);

/*
4 ways to create Objects
    Object Literal
    Constructor Function
    Object.Create method
    ES6 Class
*/

// ##########  OBJECT LITERAL #############
let bike = {name: 'SuperSport', maker:'Ducati', engine:'937cc'};

console.log(bike.engine);     //Output: '937cc'
console.log(bike['maker']);   //Output: 'Ducati'

// Adding Property to already created Object Literal
bike.wheelType = 'Alloy';
console.log(bike.wheelType);   //Output: Alloy

//Functions added to objects are called methods
/* Adding method start() later to the object */
bike.start = function() {
    console.log('Starting the engine...');  
}
bike.start();   //Output: Starting the engine...

/* Adding method stop() later to the object */
bike.stop = function() {
    console.log('Applying Brake...');  
}
bike.stop();    //Output: Applying Brake...
// ##########  OBJECT LITERAL #############



// ##########  CONSTRUCTOR FUNCTION #############
//Advantage of this function is that the object can be configured.
//Constructor is nothing but a function. With help of 'new' keyword, it can create multiple objects of same flavor.
//new in front of any function turns a function into a constructor call.
// every function while executing has a reference to it's current execution context called 'this'(keyword)

function Vehicle(name, maker) {
    this.name = name;
    this.maker = maker;
 }
 let car1 = new Vehicle('Fiesta', 'Ford');
 let car2 = new Vehicle('Santa Fe', 'Hyundai');
 console.log(car1.name);    //Output: Fiesta
 console.log(car2.name);    //Output: Santa Fe


/*
PROBLEMS WITH CONSTRUCTOR FUNCTION
1. Problem with the constructor function: Every object has its own instance of the function
2. Problem with the prototype: Modifying a property using one object reflects the other object also.
---Also see PROTOTYPES SECTION----
On executing the below code, the JavaScript engine will create two copies of the constructor function, each for person1 and person2.
i.e. every object created using the constructor function will have its own copy of properties and methods. It doesn’t make sense to have two instances of function fullName that do the same thing. Storing separate instances of function for each object results into wastage of memory.
*/
function Human(firstName, lastName) {
	this.firstName = firstName,
	this.lastName = lastName,
	this.fullName = function() {
		return this.firstName + " " + this.lastName;
	}
}

var person1 = new Human("Virat", "Kohli");
var person2 = new Human("Sachin", "Tendulkar");

console.log('person', person1);
/*
PROBLEMS WITH CONSTRUCTOR FUNCTION

*/
/*SOLUTION*/
//To solve both problems, we can define all the object-specific properties inside the constructor and all shared properties and methods inside the prototype as shown below:
//Define the object specific properties inside the constructor
function Human(name, age){
	this.name = name,
	this.age = age,
	this.friends = ["Jadeja", "Vijay"]
}
//Define the shared properties and methods using the prototype
Human.prototype.sayName = function(){
	console.log(this.name);
}
//Create two objects using the Human constructor function
var person1 = new Human("Virat", 31);
var person2 = new Human("Sachin", 40);

//Lets check if person1 and person2 have points to the same instance of the sayName function
console.log(person1.sayName === person2.sayName) // true

//Let's modify friends property and check
person1.friends.push("Amit");

console.log(person1.friends)// Output: "Jadeja, Vijay, Amit"
console.log(person2.friends)//Output: "Jadeja, Vijay"
// ##########  CONSTRUCTOR FUNCTION #############

// ##########  OBJECT WITH CREATE METHOD #############
//Object.create() allows creation of an object with more attribute options like:
// configurable, enumerable, writable and value
/*
Object.create(prototype_object, propertiesObject)
Object.create method accepts two arguments as:
1. prototypeObject: newly created objects prototype object. It has to be an object or null.
2. propertiesObject: Properties of the new object. This argument is optional
*/

/// CREATE OBJECT WITHOUT PROTOTYPE
/*
Here, we have created a new object person using Object.create method. As we have passed null for the prototypeObject. person object does not have any prototype object.
Further, we have added name as new property to the person object.
*/
var person = Object.create(null);

typeof(person) // Object
console.log(person) // Object with prototype object as null

// Set property to person object
person.name = "Virat";

console.log(person) // Object with name as property and prototype as null

///CREATE OBJECT WITH PROTOTYPE
let car = Object.create(Object.prototype,
    {
      name:{
        value: 'Fiesta',
        configurable: true,
        writable: true,
        enumerable: false
      },
      maker:{
        value: 'Ford',
        configurable: true,
        writable: true,
        enumerable: true
      }
    });
  console.log(car.name)    //Output: Fiesta
  /*
  propertiesObject is used to create properties on new object. It acts as a descriptor for the new properties to be defined. Descriptors can be data descriptor or access descriptors.
  ---- Data descriptors are ----
    configurable
    enumerable
    value
    writable
  ----- Access descriptors are ----
    get
    set
  */
// ##########  OBJECT WITH CREATE METHOD #############

// ##########  ES6 Class #############
//Same as any other Statically typed or OOP language.

class Vehicle {
    constructor(name, maker, engine) {
      this.name = name;
      this.maker =  maker;
      this.engine = engine;
    }
    start() {
      console.log("Starting...");
    }
  }
  let bike = new Vehicle('Hayabusa', 'Suzuki', '1340cc');

  bike.start();    //Output: Starting...

  /* Adding method brake() later to the created object */
  bike.brake = function() {
    console.log("Applying Brake...");
  }
  
  bike.brake();    //Output: Applying Brake...

// ##########  Object Methods #############
//------------   Object.keys();   ------------ 
// returns an array(strings) of object's own enumerable property names in same order as normal loop.
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.keys(object1));
// expected output: Array ["a", "b", "c"]

// simple array
var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// array like object
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// array like object with random key ordering
var anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj)); // console: ['2', '7', '100']

// getFoo is a property which isn't enumerable
var myObj = Object.create({}, {
  getFoo: {
    value: function () { return this.foo; }
  } 
});
myObj.foo = 1;
console.log(Object.keys(myObj)); // console: ['foo']


//#### ES5 Notes
Object.keys('foo');
// TypeError: "foo" is not an object (ES5 code)

Object.keys('foo');
// ["0", "1", "2"]                   (ES2015 code)

//#### Polyfill for older
// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
if (!Object.keys) {
  Object.keys = (function() {
    'use strict';
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
        dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor'
        ],
        dontEnumsLength = dontEnums.length;

    return function(obj) {
      if (typeof obj !== 'function' && (typeof obj !== 'object' || obj === null)) {
        throw new TypeError('Object.keys called on non-object');
      }

      var result = [], prop, i;

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  }());
}
//------------   Object.keys();   ------------ 



//------------   Object.values();   ------------ 
//Object.values
//method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop (the difference being that a for-in loop enumerates properties in the prototype chain as well).
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};
var obj = { foo: 'bar', baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]

// array like object
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(obj)); // ['a', 'b', 'c']

// array like object with random key ordering
// when we use numeric keys, the value returned in a numerical order according to the keys
var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.values(an_obj)); // ['b', 'c', 'a']

// getFoo is property which isn't enumerable
var my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
my_obj.foo = 'bar';
console.log(Object.values(my_obj)); // ['bar']

// non-object argument will be coerced to an object
console.log(Object.values('foo')); // ['f', 'o', 'o']
console.log(Object.values(object1));
// expected output: Array ["somestring", 42, false]
//------------   Object.values();   ------------ 

// ##########  Object Methods #############



// ##########  PROTOTYPES #############
/*
PROTOTYPES:
Prototype object of the constructor function is shared among all the objects created using the constructor function.
When a function is created in JS the JavaScript engine adds a 'PROTOTYPE' property to the function. This PROTOTYPE called a PROTOTYPE OBJECT is an object that has a constructor property by default.
This constructor property points back to the function on which the PROTOTYPE OBJECT is a PROPERTY. Can Access the function's PROTOTYPE PROPERTY bye using 'functionName.prototype
*/

/******** CHECK PROTOTYPE ********/
console.log(person.__proto__); //access prototype. unsafe in production
console.log(Object.getPrototypeOf(anna)== person)//production safe
console.log(Human.prototype);
/******** CHECK FOR EQUALITY ********/
var person={
    name:'Max',
    age:27
}

var max = Object.create(person);
var anna = Object.create(person);

console.log(anna.__proto__==person);
console.log(anna.__proto__.__proto__== Object.prototype);
console.log(Object.getPrototypeOf(anna)== person)//production safe
/******** PROTOTYPE PROPERTIES ********/
/*Prototypes have two initial properties
1. constructor
2. __proto__ (called dunder proto)


Properties and methods can be attached to the Prototype(dunder proto) Object.
*/
//Dot notation
Human.prototype.name = "Ashwin";
console.log(Human.prototype.name)//Output: Ashwin

//Square bracket notation
Human.prototype["age"] = 26;
console.log(Human.prototype["age"]); //Output: 26

console.log(Human.prototype);

/******** Problems with Prototypes ********/
// PROBLEM WHEN PROTOYPE OBJECT CONTAINS PROPERTY OF REFERENCE TYPE
/* In the above example, person1 and person2 point to the same friends' array of the prototype object. person1 modifies friends property by adding another string in the array.
Because the friends' array exists on Person.prototype, not on person1, the changes made in the friend’s property by person1 object is reflected on person2.friends also (which points to the same array).
*/

//Create an empty constructor function
function Person(){
}
//Add property name, age to the prototype property of the Person constructor function
Person.prototype.name = "Ashwin" ;
Person.prototype.age = 26;
Person.prototype.friends = ['Jadeja', 'Vijay'],//Arrays are of reference type in JavaScript
Person.prototype.sayName = function(){
	console.log(this.name);
}

//Create objects using the Person constructor function
var person1= new Person();
var person2 = new Person();

//Add a new element to the friends array
person1.friends.push("Amit");

console.log(person1.friends);// Output: "Jadeja, Vijay, Amit"
console.log(person2.friends);// Output: "Jadeja, Vijay, Amit"
// ##########  PROTOTYPES #############