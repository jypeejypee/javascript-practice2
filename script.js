let tasks = [];

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    list.innerHTML += `
      <li>
        <span>${task}</span>
        <button onclick="editTask(${index})">Edit</button>
        <button onclick="deleteTask(${index})">Delete</button>
      </li>`;
  });
}

function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (task) {
    tasks.push(task);
    input.value = "";
    renderTasks();
  }
}

function editTask(index) {
  const newTask = prompt("Edit task:", tasks[index]);
  if (newTask !== null) {
    tasks[index] = newTask.trim();
    renderTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

renderTasks();
