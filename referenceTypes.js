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


var anotherPerson = Object.create(null); //Prototype
var thirdPerson = Object.create(person);

anotherPerson.name = 'Anna';
console.log(anotherPerson);
console.log(thirdPerson.age);