import { Project, ProjectStatus } from '../models/project';


  //global state management object
type Listener<T> = (items: T[]) => void;
//listeners are just functions that receives items and then does something with it
class State<T> {
	protected listeners: Listener<T>[] = [];

	addListener(listenerFn: Listener<T>) {
		//get listener function and add to listerner array.
		this.listeners.push(listenerFn);

	}

}
export class ProjectState extends State<Project>{
	private projects: Project[] = [];
	private static instance: ProjectState;

	constructor() {
		super();
	}
	static getInstance() {
		if (this.instance) {
			return this.instance;
		}
		this.instance = new ProjectState();
		return this.instance;
	}

	addProject(title: string, desc: string, numOfPeople: number) {
		const newProject = new Project(
			Math.random().toString(),
			title,
			desc,
			numOfPeople,
			ProjectStatus.Active
		);
		this.projects.push(newProject);
		this.updateListeners();
	}

	moveProject(projectId: string, newStatus: ProjectStatus) {
		//move project from one list to another list.
		const project = this.projects.find(prj => prj.id === projectId);
		if (project  && project.status !== newStatus) {
			project.status = newStatus;
			this.updateListeners();
		}

	}
	private updateListeners(){
		for (const listenerFn of this.listeners) {
			//call listerner when adding a projce
			listenerFn(this.projects.slice()); //slice returns copy so that original array can't be edited
		}
	}
}
console.log('how man times is it running per import statement');
export const projectState = ProjectState.getInstance();
