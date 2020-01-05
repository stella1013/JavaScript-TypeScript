/**
 * Interface. describes structure of object. like a custom type. can type check a variable.
 * 
 * interface can only be used to describe a structure of object versus using a custom type which. interface can be used to be a contract for a class that has to be adhered to
 * 
 * why? ensures classes have functionality based on interface. to enforce a certain structure.
 * 
 * readonly can be added on interface properties.
 * 
 * inheritance can be implemented as well. multiple interfaces work as well unlike classes in which you can only implemnet one base class
 */
type AddFn = (a:number, b:number) =>number;
interface AddFn2 {
    (a:number, b:number):number;
}
let addi:AddFn;

addi = (n1:number, n2:number) =>{
    return n1 + n2;
}
interface Named {
readonly name:string;
}
 interface Greetable extends Named {
     greet(text:string):void;

 }
class Person implements Greetable {
    name:string;
    age:number;
    
    constructor(n:string, b:number){
        this.age =b;
        this.name = n;
    }
    greet(phrase:string){
        console.log(phrase + ' ' + this.name);
       }
}
 let user1:Person;
 user1 = new Person('Veronica', 30);

 //user1 ={name:'Veronica', age:39, 
//}
user1.greet('Hi there - I am')