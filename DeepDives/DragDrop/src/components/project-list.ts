import {Component} from './base-component';
import { autobind } from '../decorators/autobind';
import {projectState}from '../state/project-state';
import {DragTarget} from '../models/drag-drop';
import {Project, ProjectStatus} from '../models/project';
import {ProjectItem} from '../components/project-item';


export class ProjectList extends Component<HTMLDivElement, HTMLElement> implements DragTarget {

	assignedProjects: Project[];

	constructor(private typeofProject: 'active' | 'finished') {
		super('project-list', 'app', false, `${typeofProject}-projects`);
		this.assignedProjects = [];



		this.configure();
		this.renderContent();
	}

	private renderProjects() {
		const listEl = document.getElementById(`${this.typeofProject}-projects-lists`)! as HTMLUListElement;
		listEl.innerHTML = '';
		for (const prjItem of this.assignedProjects) {
			new ProjectItem(this.element.querySelector('ul')!.id, prjItem);
		}
	}
	renderContent() {
		const listId = `${this.typeofProject}-projects-lists`;
		this.element.querySelector('ul')!.id = listId;
		this.element.querySelector('h2')!.textContent = this.typeofProject.toUpperCase() + ' PROJECTS';
	}
	@autobind
	dragOverHandler(event: DragEvent): void {
		if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
			//check to make sure not dropping any other type like images.
			event.preventDefault(); //tells this element we want to allow drop. without it won't allow drop handler.
			const listEl = this.element.querySelector('ul');
			listEl!.classList.add('droppable');
		}

	}
	@autobind
	dropHandler(event: DragEvent): void {
		const priId = event.dataTransfer!.getData('text/plain');
		projectState.moveProject(priId, this.typeofProject === 'active' ? ProjectStatus.Active : ProjectStatus.Finished);
	}
	@autobind
	dragLeaveHandler(_: DragEvent): void {
		const listEl = this.element.querySelector('ul');
		listEl!.classList.remove('droppable');
	}
	configure() {
		this.element.addEventListener('dragover', this.dragOverHandler);
		this.element.addEventListener('dragleave', this.dragLeaveHandler);
		this.element.addEventListener('drop', this.dropHandler);
		//register a listener when list is created
		projectState.addListener((projects: Project[]) => {
			const relevantProjects = projects.filter(prj => {
				if (this.typeofProject === 'active') {
					return prj.status === ProjectStatus.Active;
				} else {
					return prj.status === ProjectStatus.Finished;
				}
			});
			this.assignedProjects = relevantProjects;
			this.renderProjects();

		});
	}
}
