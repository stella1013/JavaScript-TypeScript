/**
 * Generics
 * Types, Functions, and Classes. Great for if you do not know what type you will be expecting for more flexibility
 */
//Built in Generic Types
const names:Array<string> = [];
const promise:Promise<string> = new Promise((res, rej)=>{
    setTimeout(()=>{
        res('This is done!')
    }, 2000);
});

promise.then(data => data.split(' '));

//Generic Function
//function tthat merges two objects and returns another object
//valid way
function merge(objA:object, objB:object){
    return Object.assign(objA, objB);
}

console.log(merge({name:'Vero'}, {age:12}));
const mergedObj = merge({name:'Vero'}, {age:12});
// mergedObj.name //above works..and outputs a merged object..but can't acces name or age.

function mergeG<T, U>(objA: T, objB: U){
    //function returns the intersection of T&U. TS understands that the two inputs are two different types and will return intersectio.
    //when called the Types are inferred, instead of when the function was written. it's filled in dynamically at call time.
    return Object.assign(objA, objB);
}
const mergedObjG = mergeG({name:'Vero'}, {age:12});
console.log(mergedObjG.name);///now works.

//can also be specific and add types at calltime. but not needed bcus TS does it on it's own..but can be done this way.
const mergedObjGS = mergeG<{name:string}, {age:number}>({name:'Vero'}, {age:12});

/*Constraits
*/
const mergedObjC = mergeG({name:'Vero'}, 30); /// this fails silently trying to pass 30 instead of an object. so you can add contraints. by adding 'extends'
function mergeC<T extends object, U extends object>(objA: T, objB: U){
    //function returns the intersection of T&U. TS understands that the two inputs are two different types and will return intersectio.
    //when called the Types are inferred, instead of when the function was written. it's filled in dynamically at call time.
    return Object.assign(objA, objB);
}
//const mergedObjCon = mergeC({name:'Vero'}, 30); ///now it fails.

interface Lengthy{
    length:number;
}
function countAndPrint<T extends Lengthy>(element:T):[T, string]{
    let desc = 'Got no value';
    if(element.length > 0){
        desc = 'Got ' + element.length + ' elements';
    }
    return [element, desc];

} //only works with data that has a length property which is why interface Lengthy is created. string and array have length so the function works.
console.log(countAndPrint('Hi there!'));
console.log(countAndPrint(['Sport', 'Cooking']));


//keyof constraint 
/**
 * we don't know if the object will really have that key. which the functio belo will produce the following error. 'element has an 'any' type because expression of type 'string' can't be used to index type '{}'. No index signature with a parameter of type 'string ' was foun d on type '{}'
 * function extractAndConvert(obj:object, key:string){
    return 'Value ' + obj[key];
}
 */
function extractAndConvert<T extends object, U extends keyof T>(obj:T, key:U){
    return 'Value ' + obj[key];
}

//console.log(extractAndConvert({name:'Max'}, 'age')); this will also throws an error. now it expects the key of the object. they object only contains name.
console.log(extractAndConvert({name:'Max'}, 'name'));
/**
 * if we have a DataStorage Class, we will get typescript errors because we don't have info about what type of data we're store or the item. we can turn it into a generic. we don't care wheter its strings, numbers or what..just that it's uniform type.
 * class DataStorage {
    private data = [];

    addItem(item) {
        this.data.push(item);
    }

    removeItem(item){
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems(){
        return[...this.data];
    }
}
 */
class DataStorage<T> {
    private data:T[] = [];

    addItem(item:T) {
        this.data.push(item);
    }

    removeItem(item:T){
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems(){
        return[...this.data];
    }
}
const textStorage = new DataStorage<string>();
textStorage.addItem('One');
textStorage.addItem('Flowers');
console.log(textStorage.getItems());

const varStorage = new DataStorage<string | number>();
varStorage.addItem(4);
varStorage.addItem('Trees');

/** 
 * This only works for primitives and not refernce. we can
 * add if(this.data.indexOf(item) === -1) return. so we don't accidentally remove the wrong item.
 * So when we work with objects or arrays because index off if we pass in an object here will not work because technically this is a new object. It might look like this one but it doesn't work because this technically is a brand new object in memory and has a different address and indeed here javascript will look for the address and basically not find it. So what it then does is it removes the last element in the array here because it isn't the end returns minus one index of returns minus one here. If it doesn't find anything which means it starts at the end of the array. That's normal javascript behavior and removes the last element of the array deal for. That's why it worked for a menu it didn't really work it accidentally worked but why it does not work for Max we're always removing the last element of the array for analysis we can't identify it no one work around to at least fix that is to check if we find item so we can check if this code here if Dad is equal to minus 1 which means we did not find it then we can return and make sure we don't accidentally remove the wrong item but of course now we just fixed that but but we still don't have this in a state
 */

class DataStorage2<T> {
    private data:T[] = [];

    addItem(item:T) {
        this.data.push(item);
    }

    removeItem(item:T){
        if(this.data.indexOf(item) === -1){
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems(){
        return[...this.data];
    }
}
const objectStorage = new DataStorage2();
const mxObj = {name:'Max'} //storing it in a const here makes sure it's the same object
objectStorage.addItem(mxObj);
console.log(objectStorage.getItems());

//Built in Generic Utility Types

interface CourseGoal {
    title:string;
    description:string;
    completeUntil:Date;
}

function createCourseGoal(title:string, description:string, date:Date){
    let courseGoal:Partial<CourseGoal>={};// Partial Type is built in to make the properties optional
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

const namess:Readonly<string[]> = ['Max', 'Anna'];//to make sure it's a locked array
//namess.push('Manu');

//Generics vs Union Types

class DataStorage3 {
    private data:(string | number | boolean)[] = [];///this isn't saying it's either string | or number or boolean. it's saying it's mixed. the array if set to string array it will try to also add number and boolean and fail. not what we want.

    addItem(item:string | number | boolean) {
        this.data.push(item);
    }

    removeItem(item:string | number | boolean){
        if(this.data.indexOf(item) === -1){
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems(){
        return[...this.data];
    }
}