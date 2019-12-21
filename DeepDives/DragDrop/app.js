//connect to html elements, form, divs
//create autobind decorator.
//autobind decorator
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function AutoBind(_, _2, descriptor) {
    var originalMethod = descriptor.value;
    var adjDescriptor = {
        configurable: true,
        get: function () {
            var bondFn = originalMethod.bind(this);
            return bondFn;
        }
    };
    return adjDescriptor;
}
function validate(rules) {
    var isValid = true;
    if (rules.required) {
        isValid = isValid && rules.required && rules.value.trim().length !== 0;
    }
    if (rules.minLength) {
        isValid = isValid && rules.minLength >= rules.value.trim().length;
    }
    if (rules.maxLength) {
        isValid = isValid && rules.maxLength <= rules.value.trim().length;
    }
    if (rules.minValue) {
        isValid = isValid && rules.minValue >= +rules.value;
    }
    if (rules.maxValue) {
        isValid = isValid && rules.maxValue <= +rules.value;
    }
    return isValid;
}
//autobind decorator
var ProjectInput = (function () {
    function ProjectInput() {
        this.templateElement = document.getElementById('project-input');
        this.hostElement = document.getElementById('app');
        var importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = 'user-input';
        this.titleInputElement = this.element.querySelector('#title');
        this.descriptionInputElement = this.element.querySelector('#description');
        this.peopleInputElement = this.element.querySelector('#people');
        this.configure();
        this.attach();
    }
    ProjectInput.prototype.gatherUserInput = function () {
        var title = this.titleInputElement.value;
        var desc = this.descriptionInputElement.value;
        var people = this.peopleInputElement.value;
        if (!validate({ value: title, required: true, minLength: 5 }) &&
            !validate({ value: desc, required: true, minLength: 5 }) &&
            !validate({ value: people, required: true, minLength: 5 })) {
            console.log('invalid input');
            return;
        }
        else {
            return [title, desc, +people];
        }
    };
    ProjectInput.prototype.clearInputs = function () {
        this.titleInputElement.value = '';
        this.descriptionInputElement.value = '';
        this.peopleInputElement.value = '';
    };
    ProjectInput.prototype.submitHandler = function (e) {
        e.preventDefault();
        var userInput = this.gatherUserInput();
        if (Array.isArray(userInput)) {
            var title = userInput[0], desc = userInput[1], people = userInput[2];
            //console.log([title, desc, people]);
        }
        this.clearInputs();
    };
    ProjectInput.prototype.configure = function () {
        this.element.addEventListener('submit', this.submitHandler);
    };
    ProjectInput.prototype.attach = function () {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    };
    return ProjectInput;
}());
__decorate([
    AutoBind
], ProjectInput.prototype, "submitHandler");
var project = new ProjectInput();
