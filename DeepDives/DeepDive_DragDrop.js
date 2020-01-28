/**
 * ###### DRAG & DROP THEORY #####
 * 
 * 1. Mark Elements as "draggable" - add draggable attribute or set property to 'true'
 * 2. Listen to "dragstart" Event on element that is 'draggable' - describe operation & append data
 * 3. Accept Drop via 'dragenter' and 'dragover' Events => preventDefault(). - add listeners on elements that are drop areas.
 * default.. a drop event is always cancelled so preventDefault() to allow a drop.
 * 4. Optional - Listen to 'dragleave' Event - update ui styles when object leaves drop zone.
 * 5. Listen to 'drop' event & update data/ui. - DOM needs updating.
 * 6. Optional - Listen to 'dragend' Event - update data/ui. 'dragend' is always called even when drop is cancelled.
 * */
class ProjectItem {
	hasActiveTooltip = false;
	constructor(id, updateProjectListsFunction, type) {
		this.id = id;
		this.updateProjectListsHandler = updateProjectListsFunction;
		this.connectMoreInfoButton();
		this.connectSwitchButton();
		this.connectDrag();
	}
	update(updateProjectListsFn, type) {
		this.updateProjectListsHandler = updateProjectListsFn;
		this.connectSwitchButton(type);
	}
	showMoreInfoHandler() {
		if (this.hasActiveTooltip) {
			return;
		}
		const tooltip = new Tooltip(() => {
			this.hasActiveTooltip = false;
		});
		tooltip.attach();
		this.hasActiveTooltip = true;
	}
	connectDrag() {
    const item = document.getElementById(this.id);
		item.addEventListener('dragstart', event => {
			event.dataTransfer.setData('text/plain', this.id);
			event.dataTransfer.effectAllowed = 'move';
    });
    item.addEventListener('dragend', event => {
			console.logt(event);
		});
	}
	connectMoreInfoButton() {
		const projectItemElement = document.getElementById(this.id);
		let moreInfoBtn = projectItemElement.querySelector('button:first-of-type');
		moreInfoBtn = DOMHelper.clearEventListeners(moreInfoBtn);
		moreInfoBtn.addEventListener('click', this.showMoreInfoHandler);
	}
	connectSwitchButton(type) {
		const projectItemElement = document.getElementById(this.id);
		let switchBtn = projectItemElement.querySelector('button:last-of-type');
		switchBtn = DOMHelper.clearEventListeners(switchBtn); //prevents memory leaks with multiple created listeners
		switchBtn.textContent = type === 'active' ? 'Finish' : 'Activate';

		switchBtn.addEventListener(
			'click',
			this.updateProjectListsHandler.bind('null', this.id)
		);
	}
}
class ProjectList {
	projects = []; //projects field
	//fields are translated to properties just as if in constructor. translated/converted  to properties before constructor logic or super constructor

	constructor(type) {
		this.type = type;
		const prjItems = document.querySelectorAll(`#${type}-projects li`);

		for (const prjItem of prjItems) {
			this.projects.push(
				new ProjectItem(prjItem.id, this.switchProject.bind(this), this.type)
			);
		}
		console.log(this.projects);
		this.connectDroppable();
	}

	connectDroppable() {
		const list = document.querySelector(`#${this.type}-projects ul`);
		list.addEventListener('dragenter', event => {
			if (event.dataTransfer.types[0] === 'text/plain') {
        event.preventDefault();
        list.parentElement.classList.add('droppable');
			}
		
		});
		list.addEventListener('dragover', event => {
			if (event.dataTransfer.types[0] === 'text/plain') {
				event.preventDefault();
			}
    });
    list.addEventListener('dragleave', event => {
			if (event.relatedTarget.closest(`#${this.type}-projects ul`) !== list) {
        list.parentElement.classList.remove('droppable');
			}
    });
    list.addEventListener('drop', event => {
      const prjId = event.dataTransfer.getData('text/plain');
			if(this.projects.find(p => p.id === prjId)){
        return;
      }
      document.getElementById(prjId).querySelector('button:last-of-type').click();
      list.parentElement.classList.remove('droppable');
    
		});
	}
	setSwitchHandlerFunction(switchHandlerFunction) {
		this.switchHandler = switchHandlerFunction;
	}
	addProject(project) {
		this.projects.push(project);
		DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
		project.update(this.switchProject.bind(this), this.type);
	}
	switchProject(projectId) {
		this.switchHandler(this.projects.find(p => p.id === projectId));
		/*
    //option 1 to remove from array
    const projectIndex = this.projects.findIndex(p => p.id === projectId);
    this.projects.splice(projectIndex);
    
    //option 2 to remove from array
    this.projects.filter(p => p.id !== projectId);
    */
		this.projects.filter(p => p.id !== projectId);
	}
}