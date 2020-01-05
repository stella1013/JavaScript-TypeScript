var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Classes
 * oop.
 */
var Department = /** @class */ (function () {
    function Department(name, id) {
        // this.name = name; //readonly can add typesafety
        this.name = name;
        this.id = id;
        //private id:string;
        //private name:string; //class field
        this.employees = [];
    }
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id) {
        var _this = _super.call(this, 'Accounting', id) || this;
        //private id:string;
        //private name:string; //class field
        _this.employees = [];
        return _this;
    }
    AccountingDepartment.getInstance = function () {
        if (this.instance) { //
            //static gives access to class itself instead of instance.
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2');
    };
    AccountingDepartment.prototype.describe = function () {
        console.log('Department: ' + this.name);
    };
    AccountingDepartment.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    AccountingDepartment.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return AccountingDepartment;
}(Department));
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, reports) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    ITDepartment.prototype.describe = function () {
        console.log('Department: ' + this.name);
    };
    ITDepartment.prototype.addEmployee = function (employee) {
        if (name === 'Veronica') {
            return;
        }
        this.employees.push(employee);
    };
    ITDepartment.prototype.addReports = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    ITDepartment.prototype.getmostRecentReport = function () {
        if (this.lastReport) {
            console.log(this.lastReport);
            return this.lastReport;
        }
        //throw new Error('no new report');
        return this.lastReport;
    };
    ITDepartment.prototype.setmostRecentReport = function (value) {
        this.addReports(value);
    };
    return ITDepartment;
}(Department));
var it = new ITDepartment('2', ['Veronica', 'Seol']);
it.addEmployee('Seol');
var accounting = AccountingDepartment.getInstance();
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
