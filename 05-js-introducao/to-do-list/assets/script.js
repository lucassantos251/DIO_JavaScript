const taskForm = document.getElementById('task-form');
const tasks = document.getElementById('tasks');

taskForm.onsubmit = function(element)
{
    element.preventDefault();
    const inputField = document.getElementById('task-input');
    addTask(inputField.value);
    taskForm.reset();
}

function addTask(description)
{
    const taskContainer = document.createElement('div');
    const newTask = document.createElement('input');
    const taskLabel = document.createElement('label');
    const taskDescriptionNode = document.createTextNode(description);

    newTask.setAttribute('type', 'checkbox');
    newTask.setAttribute('name', description);
    newTask.setAttribute('id', description);

    taskLabel.setAttribute('for', description);
    taskLabel.appendChild(taskDescriptionNode);

    taskContainer.classList.add('task-item');
    taskContainer.appendChild(newTask);
    taskContainer.appendChild(taskLabel);

    tasks.appendChild(taskContainer);
}
