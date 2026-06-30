function startDownload(callback) {
    console.log("Download Started...");

    setTimeout(() => {
        callback();
    }, 3000);
}

function downloading(callback) {
    console.log("Downloading...");

    setTimeout(() => {
        callback();
    }, 2000);
}

function downloadComplete() {
    console.log("Download Completed!");
}


startDownload(() => {
    downloading(() => {
        downloadComplete();
    });    
});

// task 02

let tasks = [];

// Create Task
function addTask() {
    let input = document.getElementById("taskInput");

    if (input.value.trim() === "") {
        alert("Enter a task");
        return;
    }

    tasks.push(input.value);

    input.value = "";

    displayTasks();
}

// Read Task
function displayTasks() {

    let list = document.getElementById("taskList");

    list.innerHTML = "";

    tasks.forEach((task, index) => {

        let li = document.createElement("li");

        li.innerHTML = `
            ${task}

            <button onclick="editTask(${index})">
                Edit
            </button>

            <button onclick="deleteTask(${index})">
                Delete
            </button>
        `;

        list.appendChild(li);
    });
}

// Update Task
