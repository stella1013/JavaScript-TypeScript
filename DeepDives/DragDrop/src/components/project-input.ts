import {Component} from './base-component';
import { autobind as Autobind } from '../decorators/autobind';
import * as Validation from '../util/validation';
import {projectState}from '../state/project-state';

export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {

        titleInputElement: HTMLInputElement;
        descriptionInputElement: HTMLInputElement;
        peopleInputElement: HTMLInputElement;

        constructor() {
            super('project-input', 'app', true, 'user-input');

            this.titleInputElement = this.element.querySelector(
                '#title'
            )! as HTMLInputElement;
            this.descriptionInputElement = this.element.querySelector(
                '#description'
            )! as HTMLInputElement;
            this.peopleInputElement = this.element.querySelector(
                '#people'
            )! as HTMLInputElement;
            this.element.addEventListener('submit', this.submitHandler);

            this.configure();
        }
        renderContent() {

        }
        configure() {

        }
        private gatherUserInput(): [string, string, number] | void {
            const title = this.titleInputElement.value;
            const desc = this.descriptionInputElement.value;
            const people = this.peopleInputElement.value;
            const titleValidate: Validation.Validateable = {
                value: title,
                required: true

            }
            const peopleValidate: Validation.Validateable = {
                value: +people,
                required: true,
                minValue: 1,
                maxValue: 10

            }
            const descValidate: Validation.Validateable = {
                value: desc,
                required: true,
                minLength: 5

            }
            if (
                !Validation.validate(titleValidate) ||
                !Validation.validate(descValidate) ||
                !Validation.validate(peopleValidate)
            ) {
                alert('invalid input');
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
        @Autobind
        private submitHandler(e: Event) {
            e.preventDefault();
            const userInput = this.gatherUserInput();
            if (Array.isArray(userInput)) {
                const [title, desc, people] = userInput;
                projectState.addProject(title, desc, people);
                this.clearInputs();
            }

        }


    }
