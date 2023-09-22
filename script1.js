const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        ${taskText}
        <button class="delete" onclick="removeTask(this)">Delete</button>
    `;
    taskList.appendChild(li);

    taskInput.value = '';
}

function removeTask(button) {
    const li = button.parentElement;
    taskList.removeChild(li);
}