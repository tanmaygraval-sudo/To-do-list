let taskList = [];
const inputField = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const completeBtn = document.getElementById('completeBtn');

completeBtn.addEventListener('click', completeTask);
addButton.addEventListener('click', addTask);

function completeTask() {
    const allRadios = document.querySelectorAll('.task-radio');
    allRadios.forEach(radio => {
        if (radio.checked) {
            radio.parentElement.remove();
        }
    });
}

function addTask() {
    const newTaskText = inputField.value;

    if (newTaskText.trim() === '') {
        alert("Please enter a task");
        return;
    }

    const taskListElement = document.getElementById('taskList');
    const newListItem = document.createElement('li');

    const radioButton = document.createElement('input');
    radioButton.type = 'radio';
    radioButton.className = 'task-radio';
    radioButton.name = "task-group";

    const taskLabel = document.createElement('span');
    taskLabel.textContent = " " + newTaskText;

    newListItem.appendChild(radioButton);
    newListItem.appendChild(taskLabel);
    taskListElement.appendChild(newListItem);

    taskList.push(newTaskText);
    inputField.value = '';
}