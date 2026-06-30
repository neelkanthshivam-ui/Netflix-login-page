let tasks=[];

function addTask(){

let input=document.getElementById("taskInput");

if(input.value===""){
alert("Enter Task");
return;
}

tasks.push(input.value);

input.value="";

displayTask();
}

function displayTask(){

let list=document.getElementById("taskList");

list.innerHTML="";

tasks.forEach((task,index)=>{

list.innerHTML+=`
<li>
<span onclick="complete(${index})">${task}</span>

<div>

<button class="edit"
onclick="editTask(${index})">
Edit
</button>

<button class="delete"
onclick="deleteTask(${index})">
Delete
</button>

</div>

</li>
`;

});

}

function editTask(index){

let newTask=prompt(
"Update Task",
tasks[index]
);

if(newTask){
tasks[index]=newTask;
displayTask();
}

}

function deleteTask(index){

tasks.splice(index,1);

displayTask();

}

function complete(index){

let items=document.querySelectorAll("span");

items[index].classList.toggle("done");

}