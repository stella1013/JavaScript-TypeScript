abstract class Project {
    projectName:string = 'Default';
    budget:number;
    abstract changeName(name:string):void;

    calcBudget(){
        return this.budget + 2;
    }
}

class ITProject extends Project {
    changeName(name:string):void {
        this.projectName = name;
    }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName('super it project');