//constructor functions
//another way to create objects

function Person(){
    //commonly constructor fuctions start with caps

}

var person = new Person();
person.name = 'Max';
console.log('Max');
console.log(person.__proto__ == Object.prototype);//false
console.log(person.__proto__ == Person.prototype);//js creates obj using a function 

Person.prototype.greet= function(){
    console.log('Hello');
}
person.greet();

//advantage of this function is that the object can be configured.
function Person1(){
    //commonly constructor fuctions start with caps
this.name = 'Sue';
}
console.log(person.name);

//constructor function are blueprints
//prototypes are fallbacks
//4 ways to create objects

var person = {
    name: 'Max'
}

var person2 = new Object();

var person3 = Object.create(null);

function Person4(){
    this.name = 'Max'
}
var person = new Person4();//own prototype,