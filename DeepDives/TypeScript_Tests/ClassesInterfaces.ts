/**
 * Classes
 * oop.
 */
abstract class Department{
    //private id:string;
    //private name:string; //class field
    protected employees:string[] = [];
   

    constructor(public name:string, private readonly id:string){ //constructor method
       // this.name = name; //readonly can add typesafety
      
    }

    abstract describe(this:Department):void;

    addEmployee(employee:string){
        this.employees.push(employee);
    }
    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class AccountingDepartment extends Department{
    //private id:string;
    //private name:string; //class field
    protected employees:string[] = [];
   private static instance:AccountingDepartment;

    private constructor(id:string){ 
        super('Accounting', id);}

    static getInstance(){
        if(this.instance){//
            //static gives access to class itself instead of instance.
            return this.instance;

        }
        this.instance = new AccountingDepartment('d2');
    }

    describe(this:Department) {//when describe is executed this should always be an instance of the Department class
        console.log('Department: ' +  this.name);
    }
    addEmployee(employee:string){
        this.employees.push(employee);
    }
    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department{
    private lastReport:string;
    constructor(id:string, private reports:string[]){
        super(id, 'IT');//calls constructor of base class
        
    this.lastReport = reports[0];

    }
    describe(this:Department) {//when describe is executed this should always be an instance of the Department class
        console.log('Department: ' +  this.name);
    }
    addEmployee(employee:string){
        if(name === 'Veronica'){
            return;
        }
        this.employees.push(employee);
    }
    addReports(text:string){
        this.reports.push(text);
        this.lastReport = text;
    }
    getmostRecentReport(){
        if(this.lastReport){
            console.log(this.lastReport);
            return this.lastReport;
        }
        //throw new Error('no new report');
        return this.lastReport;
       
    }
    setmostRecentReport(value:string){
        this.addReports(value);
    }
}
const it = new ITDepartment('2', ['Veronica', 'Seol']);
it.addEmployee('Seol');
const accounting = AccountingDepartment.getInstance();
accounting && accounting.describe();

//const accountingCopy = {name:'Dummy', describe: accounting.describe};
//accountingCopy.describe(); /// returns undefined. name is undefined for accountingCopy
//so now this a guard to make sure accounting 

accounting && accounting.addEmployee('Veronica');
accounting && accounting.printEmployeeInformation();
it.setmostRecentReport('hello');
it.getmostRecentReport();
//accounting.employees[1] = 'Anna';//not good.. must turn employees into private. so it's only accesssible from inside the class

/*Static methods and properties
methods and properties that aren't accessed via an instance. great for utilites
they can't accessed on non static parts of the same class. even the constructor.constructor is of course part of instance part of class


Abstract Class
makes sure that certain methods exist on all inherited classes. Adding abstract to the class forces the sub classes to  have all abstract class. It's just a definitiion of what the method looks like.
classes, properties and methods can be abstract. Abstract 
classes can't be instantiated but can be used as a base class.

Singleton pattern handy when you can't or don't want to create a static class. 

private constructor is only accessible from inside the class. by using static methods so it's not instantiated.
*/