/**Decorator - Meta Programming
 * Helpful Tool. Class Decorator Library. Helps with Validation. Nest Js. Node and Typescript
 * a decorator is just a function that is
 * Decorator runs when javascript finds definition not when it runs.
 * Logging...
    decorators.js:12 ƒ Person() {
            this.name = 'Max';
            console.log('Creating person object');
        }
    decorators.js:17 Creating person object
    decorators.js:25 
 */

 function Logger(constructor: Function){//capital decorator convention
    console.log('Logging...');
    console.log(constructor);
 }

@Logger
class Person {
    name = 'Max';

    constructor(){
        console.log('Creating person object')
    }
}

const person = new Person();

console.log(person);


///Working with Decorator Factories.
function Logger2(logString: string){//capital decorator convention
    return function(constructor: Function){ //returns an anonymous function
        console.log(logString);
        console.log(constructor);
    }
    
 }
function WithTemplate(template:string, hookId:string){
    return (_:Function) => { //constructor is necessare but if not use we can omit it with an undersocre.
        const hookEl = document.getElementById(hookId);
        if(hookEl){
            hookEl.innerHTML = template;
        }
    }
}
function WithTemplate2(template:string, hookId:string){
    return (constructor:any) => { //constructor is necessare but if not use we can omit it with an undersocre.
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if(hookEl){
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name;
        }
    }
}
@Logger2('LOGGING - Person') //can now pass in values to Decorator
//@WithTemplate('<h1>Rendering Person</h1>', 'app')
@WithTemplate2('<h1>Rendering Person</h1>', 'app')
class Person2 {
    name = 'Max';

    constructor(){
        console.log('Creating person object')
    }
}

const person2 = new Person2();

console.log(person2);


//Property Decorators
const Log = (target:any, propertyName:string | Symbol) => {
    //for property decor takes 2 arguments(1.target 2. property name)
    // for target if instance would be prototype. if static constructor function
    console.log('Property Decorator');
    console.log(target, propertyName);
}
//Accessor Decorator
const Log2 = (target:any, accessorName:string | Symbol, descriptor:PropertyDescriptor) => {
    console.log('Accessor Decorator');
    console.log(target);
    console.log(accessorName);
    console.log(descriptor);
}
//Method Decorator
const Log3 = (target:any, methodName:string | Symbol, descriptor:PropertyDescriptor) => {
    console.log('Method Decorator');
    console.log(target);
    console.log(methodName);
    console.log(descriptor);
}
//Parameter Decorator
const Log4 = (target:any, methodName:string | Symbol, positionOfArg:number) => {
    console.log('Parameter Decorator');
    console.log(target);
    console.log(methodName);
    console.log(positionOfArg);
}
class Product {
    @Log
    title: string;
    private _price:number;

    constructor(t:string, p:number){
        this.title = t;
        this._price = p
    }
    @Log2
    set price(val:number){
        if(val >0 ){
            this._price =val;
        }else{
            throw new Error('not aboev 0')
        }
    }
    @Log3
    getPriceWithTax(@Log4 tax:number){
        return this._price * (1 + tax);
    }
}

/**When do decorators execute
 * run without instantiation. decorators allow for behidn the scenes set up work when a class is defined. a function that execute when class or method is defined. a way to store extra meta data
 */

 /**Returning and changing a class in a class decorator */
 //clas and method decorators can return something inside decorator function

 //with the below set up the decorator now will run when class is instantiated
 function WithTemplate3(template:string, hookId:string){
    return <T extends {new(...args: any[]): {name:string}}>(origConstructor:T) => { //new() reserved to make a constructor function
        return class extends origConstructor {
            constructor(..._:any[]){//args aren't being used. use _
                super();//saving orignal functions and class.just adding new stuff below.
                const hookEl = document.getElementById(hookId);
                //const p = new origConstructor();
                if(hookEl){
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1')!.textContent = this.name;
                }
            }
        }
    }
}
//@Logger3('LOGGING - Person3') //can now pass in values to Decorator
//@WithTemplate('<h1>Rendering Person</h1>', 'app')
@WithTemplate3('<h1>Rendering Person</h1>', 'app')
class Person3 {
    name = 'Amy';

    constructor(){
        console.log('Creating person object')
    }
}

const person3 = new Person3();

console.log(person3);

//Other Decorator Return Types are Methods and Accessor Decorators. If used on property and parametor decorators it will return but TS will ignore them Property Descriptors allow you to define a property in more detail. 
/*
Property Descriptors
method: writeable, configuable, enumerable, value , 
accessor: get, set, configuable, enumerable*/

//Method Decorator
function AutoBind (_:any, _2:string, descriptor:PropertyDescriptor){
    //this is always set to method.
    //we can use the value key to extract the method
    const originalMethod = descriptor.value;
    const adjDesc:PropertyDescriptor = {
        configurable:true,
        enumerable:false,
        get(){
            const bondFn = originalMethod.bind(this);//what does this refer to.. this is whatever is responsible for the getter method. so this will not be overwritten because the getter acts as an extra layer to keep this from being overwritten
            return bondFn;
        }
    }
    return adjDesc;
}
class Printer {
   message='this works';

   //@AutoBind
   showMessage(){
       console.log(this.message);
   }
}
const p = new Printer();
p.showMessage();
const button = document.querySelector('button');
//button!.addEventListener('click', p.showMessage);//undefined. with event listener in function 'this' is not the same as if we just called p.message. this refers to the target of the event. could bind this to p
//button!.addEventListener('click', p.showMessage.bind(p));//this will work.


//Validating 
interface ValidatorConfig{
    [property:string]:{
        [validatableProp:string]:string[];//['require', 'positivenumbers']
    }
}
const registeredValidators: ValidatorConfig = {};

function Required(target:any, propName:string){
    registeredValidators[target.constructor] = {
        ...registeredValidators[target.constructor.name],//<--- don't overwrite but take existing decorators and just add to it.
        [propName]:['required']///best would be to get existing properties before adding registered validators
    }
}
function PositiveNumber(target:any, propName:string){
    registeredValidators[target.constructor] = {
        ...registeredValidators[target.constructor.name],
        [propName]:['positive']
    }
}
function Validate(obj:any){
    const objValidatorsConfig = registeredValidators[obj.constructor.name];
    if(!objValidatorsConfig){
        return true;
    }else{
        let isValid = true;
        for(const prop in objValidatorsConfig){
            for(const validator of objValidatorsConfig[prop]){
                switch(validator){
                    case 'required':
                        isValid = isValid && !!obj[prop];
                    case 'positive':
                        isValid = isValid && obj[prop] > 0;
                }
            }
        }
        return isValid;
    }
}
class Course {
    @Required
    title:string;
    @PositiveNumber
    price:number;

    constructor(t:string, p:number){
        this.title = t;
        this.price = p;
    }
}
const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event =>{
    event.preventDefault();
    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;
    const title = titleEl.value;
    const price = +priceEl.value;

    const createdCourse = new Course(title, price);
    if(!Validate(createdCourse)){
        console.log('not valid');
        return;
    }else{
       
        console.log(createdCourse);
       
    }
   
});