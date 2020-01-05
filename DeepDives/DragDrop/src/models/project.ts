
export enum ProjectStatus {
    Active,
    Finished
}


//Project Type -class because can be instantiated
export class Project {
    constructor(
        public id: string,
        public title: string,
        public description: string,
        public people: number,
        public status: ProjectStatus
    ) {

    }
}

