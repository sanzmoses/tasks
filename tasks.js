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
var time = today.toLocaleTimeString();

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

myTask.addTask(new Task(5, '08/28/2018', ["Added new microsite - microsoft-ems.com", "added all pages, db in site, dev in site and all credentials", "add to dev.caseddimensions but not yet done"], ['microsite', 'microsoft-ems']));

myTask.addTask(new Task(6, '09/03/2018', ["Starting task 'Request for a demo' button", "add in all microsites", "updates in service-desk (outsourced-it) microsite"], ['microsite', 'microsoft-ems']));

myTask.addTask(new Task(7, '09/04/2018', ["Request demo button done", "add in 3 microsites (employee-ss, outsourced-it, itamaas)", "employee-ss live not yet done"], ['microsites']))

myTask.addTask(new Task(8, '09/05/2018', ["Apply navbar shrinking animation and request a demo button to 3 microsites", "Fixed all navbar issues in asset management"], ['microsites']))

myTask.addTask(new Task(9, '09/06/2018', ["Applied favico, responsive banner", "All microsites"], ['microsites']))
myTask.addTask(new Task(10, '09/07/2018', ["Worked on microsoftoms.com", "Minor changes", "created subdomain, db and ready for deployment"], ['microsites', 'oms']))

console.log("---------- See all tasks ----------");
console.log(myTask);
// console.log(myTags.getTagNames());
console.log("***********************************");

console.log("---------- Latest Task ----------");
console.log(myTask.getLatestTask());
console.log("*********************************");

let app = {[
	{
		name: "Code Library",
		type: "SPA",
		tech: {
			lang:"Javascript",
			framework: "Laravel / Vue only",
			db: "Firebase / Mysql"
		},
		host: "Github Pages",
		description: ["Storage of Code samples and solutions"]
	},

]}