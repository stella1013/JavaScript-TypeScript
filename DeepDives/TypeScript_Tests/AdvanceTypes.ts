/**
 * Intersection Types
 * allow us to combine other types
 * /
 
 /* Type Guards
 help with union types to know what type we are getting at runtime
 * Discriminated Unions
 pattern when working with union types that make working with type guards easier.
 * Type Casting
 helps you tell typescript that it is a specific type. good example is in the dom.
 * Function Overloads
 */

 //Intersection Types
 type Admin = {
     name:string;
     privileges:string[];
 }

 type Employee = {
     name:string;
     startDate:Date;
 }

 type ElevatedEmployee = Admin & Employee;


 const e1:ElevatedEmployee = {
     name:'Veronica',
     privileges:['create-server'],
     startDate:new Date()
 }

 //Type Guards

type Combine = string | number;
type Numeric = number | boolean;

type Universal = Combine & Numeric;

// const addagain = (a:number, b:number):number
const addagain = (a:Combine, b:Combine):number | string =>{
    if(typeof a === 'string' || typeof b === 'string'){//this is a type guard.
        return a.toString() + b.toString();
    }
    return a + b;
}

type UnknownEmployee = Employee | Admin;

const printEmployeeInfo = (emp:UnknownEmployee) =>{
    if('privileges' in emp){
        console.log('Privilages: ' + emp.privileges);
    }
    if('startDate' in emp){
        console.log('Start Date: ' + emp.startDate);
    }
   
}

printEmployeeInfo(e1);

class Car {
    drive(){
        console.log('driving car');
    }
}
class Truck {
    drive(){
        console.log('driving truck');
    }
    loadCargo(amount:number){
        console.log('loading cargo.... '+amount);
    }
}

type Vehicle = Car | Truck;
const v1:Vehicle = new Car();
const v2:Vehicle = new Truck();

const useVehicle = (vehicle:Vehicle) => {
    vehicle.drive();
    if('loadCargo' in vehicle){//can use in case of interfaces or classes.
        vehicle.loadCargo(1000);
    }
    if(vehicle instanceof Truck){///can use in case of classes
        vehicle.loadCargo(50);
    }
    
}

useVehicle(v1);
useVehicle(v2);

//Discriminating Unions

interface Bird {
    type:'bird'; //a literal type.type assignment
    flyingSpeed:number;
}

interface Horse {
    type:'horse';
    runningSpeed:number;
}

type Animal = Bird | Horse;

const moveAnimal = (animal:Animal) =>{
    let speed;
    switch(animal.type){
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
        }
        console.log('Moving with speed: ' + speed)
}
moveAnimal({type:'bird', flyingSpeed:10});

//Type Casting
//2 ways

const paragrapInput2 = <HTMLInputElement>document.getElementById('messageOutput');
//react will use similar syntax and may be confusing.

const paragrapInput = document.getElementById('messageOutput') as HTMLInputElement;
paragrapInput.value = 'Hi There';

//Index Properties
/**
 * create objects that are more flexible on what objects can hold.
 */

 interface ErrorContainer{
     //{email:'Not valid email', username:'Must start with capital'}
     //index of only string, number or symbol.
     [prop:string]:string;
     //id:string;//more properties can be added but only as string. such as id:string is not valid.
 }

 const errorBag:ErrorContainer={
     email:'Not a valid email!',
     username:'Must start with a cap letter'
 }

 
 //function overloads. multiple function overloads
 const result = addagain('Max', 'Swarchz');
 typeof result === 'string' && result.split('');//type combined returned not string.

 //Optional Chaining - when you don't know if a property is defined. good for fetching

 const fetchedUserData = {
     id:'1',
     name:'Ver',
     job:{title:'CEO', description:'My own company'}
 }

 //console.log(fetchedUserData?.job?.title);<--ts way.
 //js way of checking console.log(fetchedUserData.job && fetchedUserData.job.title)

 //Nullish Coalescing
 //helps handle null data.
 //const userInput1 = null;

// const storedData = userInput1 ?? 'DEFAULT';
 // ?? IF null or undefined use fallback. not empty string