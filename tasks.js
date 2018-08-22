class Task {

	constructor(index, timestamp, description, tags) {
		this.index = index;
		this.timestamp = timestamp;
		this.description = description;
		this.tags = tags;
	}


}

class List {

	constructor() {
		this.lists = [this.taskZero()];
	}

	taskZero() {
		return new Task(0, "01/01/2018", "Zero", ['zero']);
	}

	addTask(Task) {
		this.lists.push(Task);
	}

	getLatestTask() {
		return this.lists[this.lists.length - 1];
	}

}

//-------------------------------------------------//
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

today = mm + '/' + dd + '/' + yyyy;
//-------------------------------------------------//

let myTask = new List();

myTask.addTask(new Task(1, today, "chevron down button smooth scrolling to target div in a page task, navbaranimate.js, style.css on http://dev2.microsoft-oms.com/azure-monitor-oms only", ['smooth-scrolling', 'anchor-tag']));


console.log("---------- See all tasks ----------");
console.log(myTask);
console.log("***********************************");

console.log("---------- Latest Task ----------");
console.log(myTask.getLatestTask());
console.log("*********************************");
