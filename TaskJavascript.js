// Define User Interface Variables

const taskForm = document.querySelector('#task-form');
const taskList = document.querySelector('#task-list-display');
const clearBtn = document.querySelector('.clear-tasks');
//const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // Add task event	 
    taskForm.addEventListener('submit', addTask);
	taskList.addEventListener('click', removeTask);

}

// Add Task
function addTask(e) {
	
	// if(taskInput.value === '') {
    // alert('Add a task');
	// } else{
		// console.log(`I have a task - ${taskInput.value}`);
	// }

	console.log(taskInput.value); // get the value of the input

const li  = document.createElement('li');

li.className = 'list-group-item';
li.appendChild(document.createTextNode(taskInput.value));
document.querySelector('ul.list-group').appendChild(li);


const link = document.createElement('a');


link.className = 'delete-item float-right';
link.setAttribute('href', '#');
link.innerHTML = '<i class="fa fa-remove"></i>'; // using innerHTML because want html AND text
li.appendChild(link);
document.querySelector('ul.list-group').appendChild(li);


	//Prevent form redirecting
	e.preventDefault();

}

// filter.addEventListener('keyup', function(e){
	
	// console.log(`I have the filter - ${filter.value}`);
	
  // // Declare variable
	
   // let input, filtertext, ul, li, a, i, txtValue;
    // input = document.getElementById("filter");
    // filtertext = input.value.toLowerCase();
    // ul = document.getElementById("task-list-display");
    // li = ul.getElementsByTagName("li");
    // for (i = 0; i < li.length; i++) {
        // a = li[i].getElementsByTagName("a")[0];
		// console.log(a);
 // //       txtValue = a.textContent || a.innerText;
			
        // if (a.textContent.toLowerCase().indexOf(filtertext) > -1) {
			// console.log(a.document.TextNode);
            // li[i].style.display = "";
        // } else {
            // li[i].style.display = "none";
        // }
    // }		
	
// });


document.querySelector('form').addEventListener('submit', function(e){


  //get the value they entered
	const task = document.getElementById('task').value;
	taskInput.value = ''; // Clear input
	
console.log(task);
  
//	set that value to local storage
	localStorage.setItem('task', task);
	
	let tasks; // create a variable to hold tasks

//then pull out any existing tasks in local storage
  if(localStorage.getItem('tasks') === null) { // in nothing there create blank array
    tasks = [];
  } else { // get the existing tasks
    tasks = JSON.parse(localStorage.getItem('tasks')); 
		//JSON.parse coverts from string to array of objects
  }

  tasks.push(task); // push the new task onto the array
console.log(tasks);
  localStorage.setItem('tasks', JSON.stringify(tasks));
//	put the new tasks to local storage, convert to string with JSON.stringify


  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

// generates the saved tasks on new load
tasks.forEach(function(task){
  console.log(task);
  
const li  = document.createElement('li');

li.className = 'list-group-item';
li.appendChild(document.createTextNode(task));
document.querySelector('ul.list-group').appendChild(li);


const link = document.createElement('a');


link.className = 'delete-item float-right';
link.setAttribute('href', '#');
link.innerHTML = '<i class="fa fa-remove"></i>'; // using innerHTML because want html AND text
li.appendChild(link);
document.querySelector('ul.list-group').appendChild(li); 
  
});

function removeTask(e) {
	
  if(e.target.parentElement.className === 'delete-item float-right'){ // class name is the string
    console.log('delete item');
	
	var r = confirm("Are you Sure you want to delete this task?");
		if (r == true) {
			
		     e.target.parentElement.parentElement.remove();
			 
			let text = e.target.parentElement.parentElement.textContent;			 
			 console.log(text);
			 console.log(tasks);			 
			
			for (var i = 0,len = tasks.length; i < len; i++) {
				if ( tasks[i] === text ) { 
				   let man = tasks.splice(i, 1);
				}
			}		
			
			 console.log(tasks);				
			  localStorage.setItem('tasks', JSON.stringify(tasks));					
						 
		} 
  }
}


clearBtn.addEventListener('click', function(e){
		
	var c = confirm("Are you Sure you want to Clear your task List?");
		if (c == true) {
			
		  const list = document.getElementById("task-list-display");
		  while (list.firstChild) {
			list.removeChild(list.firstChild);		
	        localStorage.clear();	
		  }					

		}
	e.preventDefault();	
	
 });






