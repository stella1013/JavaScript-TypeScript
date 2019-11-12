// reference objects

var age=30;

var person={
    name:'Max',
    age:27
}

var person1={
    name:'Max',
    age:27
}

console.log(person.__proto__); //access prototype. unsafe in production
console.log(person.toString());

function myOwnPerson(){
    this.name = 'Max';
    this.age = 27
}

Object.prototype.greet = function(){
    console.log('Hello there!');
}
console.log(person.greet())

var max = Object.create(person);
var anna = Object.create(person);

console.log(anna.__proto__==person);
console.log(anna.__proto__.__proto__== Object.prototype);
console.log(Object.getPrototypeOf(anna)== person)//production safe