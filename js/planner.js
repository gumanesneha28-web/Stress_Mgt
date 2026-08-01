const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Load saved tasks
window.onload = function () {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(task => {
        createTask(task.text, task.completed);
    });
};

// Add Task
function addTask() {

    const text = taskInput.value.trim();

    if (text === "") {
        alert("Please enter a task.");
        return;
    }

    createTask(text, false);
    saveTasks();

    taskInput.value = "";
}

// Create Task
function createTask(text, completed) {

    const li = document.createElement("li");

    li.className =
        "glass p-4 rounded-2xl flex justify-between items-center text-white";

    if (completed) {
        li.classList.add("opacity-60");
    }

    li.innerHTML = `
        <span class="${completed ? 'line-through' : ''}">
            ${text}
        </span>

        <div class="space-x-2">

            <button class="bg-green-500 px-3 py-1 rounded-lg hover:bg-green-600">
                ✔
            </button>

            <button class="bg-red-500 px-3 py-1 rounded-lg hover:bg-red-600">
                ✖
            </button>

        </div>
    `;

    const buttons = li.querySelectorAll("button");

    // Complete Task
    buttons[0].onclick = function () {

        li.classList.toggle("opacity-60");

        li.querySelector("span").classList.toggle("line-through");

        saveTasks();
    };

    // Delete Task
    buttons[1].onclick = function () {

        li.remove();

        saveTasks();
    };

    taskList.appendChild(li);
}

// Save Tasks
function saveTasks() {

    const tasks = [];

    document.querySelectorAll("#taskList li").forEach(li => {

        tasks.push({

            text: li.querySelector("span").innerText,

            completed: li.querySelector("span").classList.contains("line-through")

        });

    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}