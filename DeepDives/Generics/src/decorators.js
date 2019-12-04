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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Logger(constructor) {
    console.log('Logging...');
    console.log(constructor);
}
var Person = (function () {
    function Person() {
        this.name = 'Max';
        console.log('Creating person object');
    }
    return Person;
}());
Person = __decorate([
    Logger
], Person);
var person = new Person();
console.log(person);
///Working with Decorator Factories.
function Logger2(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function WithTemplate(template, hookId) {
    return function (_) {
        var hookEl = document.getElementById(hookId);
        if (hookEl) {
            hookEl.innerHTML = template;
        }
    };
}
function WithTemplate2(template, hookId) {
    return function (constructor) {
        var hookEl = document.getElementById(hookId);
        var p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1').textContent = p.name;
        }
    };
}
var Person2 = (function () {
    function Person2() {
        this.name = 'Max';
        console.log('Creating person object');
    }
    return Person2;
}());
Person2 = __decorate([
    Logger2('LOGGING - Person') //can now pass in values to Decorator
    //@WithTemplate('<h1>Rendering Person</h1>', 'app')
    ,
    WithTemplate2('<h1>Rendering Person</h1>', 'app')
], Person2);
var person2 = new Person2();
console.log(person2);
//Property Decorators
var Log = function (target, propertyName) {
    //for property decor takes 2 arguments(1.target 2. property name)
    // for target if instance would be prototype. if static constructor function
    console.log('Property Decorator');
    console.log(target, propertyName);
};
//Accessor Decorator
var Log2 = function (target, accessorName, descriptor) {
    console.log('Accessor Decorator');
    console.log(target);
    console.log(accessorName);
    console.log(descriptor);
};
//Method Decorator
var Log3 = function (target, methodName, descriptor) {
    console.log('Method Decorator');
    console.log(target);
    console.log(methodName);
    console.log(descriptor);
};
//Parameter Decorator
var Log4 = function (target, methodName, positionOfArg) {
    console.log('Parameter Decorator');
    console.log(target);
    console.log(methodName);
    console.log(positionOfArg);
};
var Product = (function () {
    function Product(t, p) {
        this.title = t;
        this._price = p;
    }
    Object.defineProperty(Product.prototype, "price", {
        set: function (val) {
            if (val > 0) {
                this._price = val;
            }
            else {
                throw new Error('not aboev 0');
            }
        },
        enumerable: true,
        configurable: true
    });
    Product.prototype.getPriceWithTax = function (tax) {
        return this._price * (1 + tax);
    };
    return Product;
}());
__decorate([
    Log
], Product.prototype, "title");
__decorate([
    Log2
], Product.prototype, "price");
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax");
/**When do decorators execute
 * run without instantiation. decorators allow for behidn the scenes set up work when a class is defined. a function that execute when class or method is defined. a way to store extra meta data
 */
/**Returning and changing a class in a class decorator */
//clas and method decorators can return something inside decorator function
//with the below set up the decorator now will run when class is instantiated
function WithTemplate3(template, hookId) {
    return function (origConstructor) {
        return (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _ = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _[_i] = arguments[_i];
                }
                var _this = _super.call(this) || this;
                var hookEl = document.getElementById(hookId);
                //const p = new origConstructor();
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1').textContent = _this.name;
                }
                return _this;
            }
            return class_1;
        }(origConstructor));
    };
}
//@Logger3('LOGGING - Person3') //can now pass in values to Decorator
//@WithTemplate('<h1>Rendering Person</h1>', 'app')
var Person3 = (function () {
    function Person3() {
        this.name = 'Amy';
        console.log('Creating person object');
    }
    return Person3;
}());
Person3 = __decorate([
    WithTemplate3('<h1>Rendering Person</h1>', 'app')
], Person3);
var person3 = new Person3();
console.log(person3);
//Other Decorator Return Types are Methods and Accessor Decorators. If used on property and parametor decorators it will return but TS will ignore them Property Descriptors allow you to define a property in more detail. 
/*
Property Descriptors
method: writeable, configuable, enumerable, value ,
accessor: get, set, configuable, enumerable*/
//Method Decorator
function AutoBind(_, _2, descriptor) {
    //this is always set to method.
    //we can use the value key to extract the method
    var originalMethod = descriptor.value;
    var adjDesc = {
        configurable: true,
        enumerable: false,
        get: function () {
            var bondFn = originalMethod.bind(this); //what does this refer to.. this is whatever is responsible for the getter method. so this will not be overwritten because the getter acts as an extra layer to keep this from being overwritten
            return bondFn;
        }
    };
    return adjDesc;
}
var Printer = (function () {
    function Printer() {
        this.message = 'this works';
    }
    //@AutoBind
    Printer.prototype.showMessage = function () {
        console.log(this.message);
    };
    return Printer;
}());
var p = new Printer();
p.showMessage();
var button = document.querySelector('button');
var registeredValidators = {};
function Required(target, propName) {
    registeredValidators[target.constructor] = __assign({}, registeredValidators[target.constructor.name], (_a = {}, _a[propName] = ['required'] ///best would be to get existing properties before adding registered validators
    , _a));
    var _a;
}
function PositiveNumber(target, propName) {
    registeredValidators[target.constructor] = __assign({}, registeredValidators[target.constructor.name], (_a = {}, _a[propName] = ['positive'], _a));
    var _a;
}
function Validate(obj) {
    var objValidatorsConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorsConfig) {
        return true;
    }
    else {
        var isValid = true;
        for (var prop in objValidatorsConfig) {
            for (var _i = 0, _a = objValidatorsConfig[prop]; _i < _a.length; _i++) {
                var validator = _a[_i];
                switch (validator) {
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
var Course = (function () {
    function Course(t, p) {
        this.title = t;
        this.price = p;
    }
    return Course;
}());
__decorate([
    Required
], Course.prototype, "title");
__decorate([
    PositiveNumber
], Course.prototype, "price");
var courseForm = document.querySelector('form');
courseForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var titleEl = document.getElementById('title');
    var priceEl = document.getElementById('price');
    var title = titleEl.value;
    var price = +priceEl.value;
    var createdCourse = new Course(title, price);
    if (!Validate(createdCourse)) {
        console.log('not valid');
        return;
    }
    else {
        console.log(createdCourse);
    }
});
