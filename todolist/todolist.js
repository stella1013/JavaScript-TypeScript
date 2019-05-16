function Item(name, comment, time, date){
    this.name = name;
    this.comment = comment;
    this.time = time;
    this.date = date;
}


function createNewTask(name, comment){
    var time = Date.now();
    var date = Date.now();
    var task = new Item(name, comment, time, date); 
    console.log("New Task has been created " + task.name + ' '+task.comment+' ' + task.date+ ' '+ task.time); 
}


console.log(createNewTask('clean Room', 'idk comment'));