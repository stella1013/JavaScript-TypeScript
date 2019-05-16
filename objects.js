// reference types
/*
NOTES

create variable w/ value and between curly braces define the object
with properties
key/valuePairs ={
key:value
}
*/

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
var field = 'name';
console.log(person.name);
console.log(person["name"]);
console.log(person[field]);
console.log(person.details.hobbies);
person.greet();

console.log(typeof person.name);
console.log(person["occupation-g"]);

person.name = 'Anna';
console.log(person);

//another way to create objects
var anotherPerson = new Object();
console.log(anotherPerson);
anotherPerson.name = 'Anna';
anotherPerson.age = 30;
console.log(anotherPerson);

//Reference types.