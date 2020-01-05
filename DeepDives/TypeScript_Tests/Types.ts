//

/**
 * Types
 * TypeScript helps us catch bugs and prevent errors at development instead of at runtime.
 * TS has core types but also allows you to create your own types.
 * Core Types:
 * numbers - numbers are float by default. + converts to number.
 * strings - can be defined with single quotes, double quotes and back ticks. back ticks allow template literal
 * boolean - true and false. no truthy or falsy values
 * objects - {name:string; age:number;}
 * arrays - string[];
 * tuples [number, string]; can't add objects by index access. can only do push. empty array is not allowed. lenght is inforced with person.role =[5, 'user'] but push() doesn't enforce leength
 * enums - js doesn't understand enum. enum{NEW, OLD} - Human readable labels. Numbers can save bits of memory vs strings. can add a starting number NEW=5, or other values. also strings.
 * Any - most flexible type. no specific type assignment
 * Union Type - multiple types assigned to object. usse pipe operator |
 * Literal Type - clear about exact value it should hold
 * Type Alias - a way store types to avoid repetition or shorter type definitions
 * 
 * Void - function doesn't return anything. console loggin function with void will return undefined on the function.
 * undefined - valid type in typescript. variables that are not initiated.
 * function types - see below
 * unknown type - see below
 * never type
 * 
 */

 /**
  * Union type
  * may still cause an error even with the pipe. may need to add a run time check which checks the type. just depends on the logic being written.
  */

  const add = (n1:number | string, n2:number | string) =>{
      let result;
      if(typeof n1 === 'number' && typeof n2 === 'number'){
    
         result = n1 + n2;
      } else {
         result = n1.toString() + n2.toString();
      }
      return result;
  }
  const combinedNumbers = add(30, 26);
  const combinedNames = add("betty", "anne");
  console.log(combinedNumbers + ' ' + combinedNames);

  /**
   * Literal Type
   */
  //Type Alias examble
  type Combinable = number | string;
  type ConversionDescriptor = 'as-number' | 'as-text';
  const add2 = (n1:Combinable, n2:Combinable, resultConversion:ConversionDescriptor) =>{
    let result;
    if(typeof n1 === 'number' && typeof n2 === 'number' || resultConversion === 'as-number'){
       result = +n1 + +n2;
    } else {
       result = n1.toString() + n2.toString();
    }
    
    return result;
}
const combinedNumbers2 = add2(30, 26, 'as-number');
const combinedNames2 = add2("betty", "anne", 'as-text');
console.log(combinedNumbers2 + ' ' + combinedNames2);
//Compiler - const converted to var in js. it just helps at development that the variable cannot change.

let input:Number = 15; // this is redundant. TypeScript already knows/infers the type of 'input' when assigned the value 15.
let input2 = 15; //is correct.
let input3:Number;//and this for initialization later.


const add3 = (n1:number, n2:number): number => {
 return n1 + n2;
}
const printAdd3 = (num:number):void => console.log(num);

printAdd3(add3(12, 5)); //console.log(printAdd3(add3(12, 5))); <-- console logging printAdd3 will return undefined since it is void.

/**
 * Function types
 */
//let combineValues:Function;//adding :Function will quiet compiler but now any function can be applied there which is not what we want.
// combineValues = add3; //can store a pointer to function
 //combineValues = 5; //will give any error because it should hold a function

 let combineValues: (a:number, b:number) => number;
 combineValues = add3;
 console.log(combineValues(8, 8));

 //show callbacks in type
 const addAndHandle = (n1:number, n2:number, cb:(n:number) => void) => {
     const result = n1 + n2;
     cb(result);
 }
//don't need to be explicit in call back because we have alredy defined it in the parameter. anything you might return won't be used if void even if there is a return value..callback functions can return something, even if the argument on which they're passed does NOT expect a returned value.
 addAndHandle(10, 20, (result) => {console.log(result); return true;})

 let userInput: unknown;
 let userName:string;
 userInput = 'Max';
 userInput = 5;
 //any value can be stored without errors. different from any because any turns off type checking... but will throw an error in this case userName= userInput; you don't know what type it will be, but if you know you want to do something with specific types you can use unknown.

 if(typeof userName === 'string'){
     console.log(userInput + 'is a string');
 }

 /**
  * Never is a return type ...below is a utitlity function where you want to throw erro in one place. it throws error which cancels  script and returns nothing. never produces a value. throw always crashes the script or part of the script if using try/catch. can make developers aware it never returns. even while(true), which is an infinite loop.
  */
 const generateError = (message:string, code:number):never =>{
     throw{message:MessageChannel, errorCode:code};
 }

 generateError('An error occured', 500);

/**
 * Objects
 * 
 * const person: {
    name: string;
    age: number;
    }
    typescript has inferred the object type above.
    
 */
const person = {
    name: 'Maximilian',
    age:30
};

console.log(person);

/* we could do

const person2:object = {
    name: 'Maximilian',
    age:30
};
console.log(person2.name) <-- this will throw an error because we aren't more specific
const person2:object is the same as person2:{}
*/
