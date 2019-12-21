//connect to html elements, form, divs
//create autobind decorator.
//autobind decorator

interface Validateable{
    value:string;
    required?:boolean;
    minLength?:number;
    maxLength?:number;
    minValue?:number;
    maxValue?:number;
}
function AutoBind(
	_: any,
	_2: string,
	descriptor: PropertyDescriptor
) : PropertyDescriptor{
	const originalMethod = descriptor.value;
	const adjDescriptor: PropertyDescriptor = {
        configurable:true,
		get() {
			const bondFn = originalMethod.bind(this);
			return bondFn;
		}
	};
	return adjDescriptor;
}
function validate(rules:Validateable):boolean{
    let isValid = true;
    if(rules.required){
        isValid = isValid && rules.required && rules.value.trim().length !== 0;
    }
    if(rules.minLength){
        isValid = isValid && rules.minLength >= rules.value.trim().length;
    }
    if(rules.maxLength){
        isValid = isValid && rules.maxLength <= rules.value.trim().length;
    }
    if(rules.minValue){
        isValid = isValid && rules.minValue >= +rules.value;
    }
    if(rules.maxValue){
        isValid = isValid && rules.maxValue <= +rules.value;
    }
    return isValid;
}
//autobind decorator
class ProjectInput {
	templateElement: HTMLTemplateElement;
	hostElement: HTMLDivElement;
	element: HTMLElement;
	titleInputElement: HTMLInputElement;
	descriptionInputElement: HTMLInputElement;
	peopleInputElement: HTMLInputElement;

	constructor() {
		this.templateElement = document.getElementById(
			'project-input'
		)! as HTMLTemplateElement;
		this.hostElement = document.getElementById('app')! as HTMLDivElement;

		const importedNode = document.importNode(
			this.templateElement.content,
			true
		);
		this.element = importedNode.firstElementChild as HTMLFormElement;
		this.element.id = 'user-input';
		this.titleInputElement = this.element.querySelector(
			'#title'
		)! as HTMLInputElement;
		this.descriptionInputElement = this.element.querySelector(
			'#description'
		)! as HTMLInputElement;
		this.peopleInputElement = this.element.querySelector(
			'#people'
		)! as HTMLInputElement;

		this.configure();
		this.attach();
	}
	private gatherUserInput(): [string, string, number] | void {
		const title = this.titleInputElement.value;
		const desc = this.descriptionInputElement.value;
		const people = this.peopleInputElement.value;
        if (
            !validate({value:title, required:true, minLength:5}) &&
            !validate({value:desc, required:true, minLength:5}) &&
            !validate({value:people, required:true, minLength:5})
            ) 
        {   console.log('invalid input');
            return;
            
			
		} else {
			return [title, desc, +people];
		}
	}
	private clearInputs() {
		this.titleInputElement.value = '';
		this.descriptionInputElement.value = '';
		this.peopleInputElement.value = '';
	}
	@AutoBind
	private submitHandler(e: Event) {
		e.preventDefault();
		const userInput = this.gatherUserInput();
		if (Array.isArray(userInput)) {
			const [title, desc, people] = userInput;
			//console.log([title, desc, people]);
		}
		this.clearInputs();
	}
	private configure() {
		this.element.addEventListener('submit', this.submitHandler);
	}
	private attach() {
		this.hostElement.insertAdjacentElement('afterbegin', this.element);
	}
}

const project = new ProjectInput();
