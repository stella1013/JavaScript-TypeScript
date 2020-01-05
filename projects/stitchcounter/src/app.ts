class StitchCounter {
    private _count: number;
    constructor(count: number) {
        this._count = count;
    }
    getCounter():number{
        return this._count;
    }
    add(event:MouseEvent) {
        this._count = this._count + 1;
    }
    subtract(event:MouseEvent) {
        if(this._count > 0){
            this._count = this._count - 1;
        }
       
    }
}
//create projects and save counts.

let input = document.getElementById('total') as HTMLInputElement;
let addButton = document.getElementById('add') as HTMLButtonElement;
let subtractButton = document.getElementById('subtract') as HTMLButtonElement;

let val:number = parseInt(input.value, 10);

let counter = new StitchCounter(val);

addButton.addEventListener('click', (e:any)=>{
    counter.add(e);
    let result = counter.getCounter();
    input.value = result.toString();
});

subtractButton.addEventListener('click', (e:any)=>{
    counter.subtract(e);
    let result = counter.getCounter();
    input.value = result.toString();
});