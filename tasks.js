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

class Tag {

	constructor(index, name, task) {
		this.index = index;
		this.name = name;
		this.task = task;
	}

}

class Tags {

	constructor() {
		this.lists = [new Tag(0, 'smooth-scrolling', null)];
	}

	addTag(NewTag) {
		if(this.getTagNames().indexOf(NewTag.name.toLowerCase()) > -1) {
			console.log("Input Error: New Tag is a Duplicate Tag");
			return ;
		}

		this.lists.push(NewTag);
	}

	getTagNames() {
		let names = [];
		for(let x = 0; x < this.lists.length; x++) {
			names.push(this.lists[x].name.toLowerCase());
		}

		return names;
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
let myTags = new Tags();

myTags.addTag(new Tag(1, "anchor", 1));

myTask.addTask(new Task(1, '08/22/2018', "chevron down button smooth scrolling to target div in a page task, navbaranimate.js, style.css on http://dev2.microsoft-oms.com/azure-monitor-oms only", ['smooth-scrolling', 'anchor-tag']));

myTask.addTask(new Task(2, '08/22/2018', "same task as 1 but copied the css from style.css to azure-monitor-oms.css and added margin top", ['smooth-scrolling', 'anchor-tag', 'chevron']));

myTask.addTask(new Task(3, '08/23/2018', ["task 2 deployed to live", "created dummy gmail account for Oauth in every maintained site", "Used social login plugin in octoberCMS"], ['Oauth', 'social-login']));

myTask.addTask(new Task(4, '08/24/2018', ["Add facebook and google sign in to microsites", "added to employee-ss but not yet done", "add to dev.caseddimensions but not yet done"], ['Oauth', 'social-login']));


console.log("---------- See all tasks ----------");
console.log(myTask);
// console.log(myTags.getTagNames());
console.log("***********************************");

console.log("---------- Latest Task ----------");
console.log(myTask.getLatestTask());
console.log("*********************************");
