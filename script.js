const addTskBtn = document.getElementById('add-task');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

addTskBtn.addEventListener('click', addTask);

function addTask(){
    if(taskInput.value === ''){
        alert('Please enter a task');
        return;
    }
    const task = taskInput.value;
    const taskItem = document.createElement('li');
    taskItem.textContent = task;
    taskItem.style.fontWeight = 'bold';
    taskList.appendChild(taskItem);
    taskInput.value = ''; // clear the input field


    // Add a delete button to the task
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', deleteTask);
    function deleteTask(){
        taskList.removeChild(taskItem);
    }
    taskItem.appendChild(deleteBtn);

    // Add a done button to the task
    const completedBtn = document.createElement('button');
    completedBtn.textContent = 'Done';
    completedBtn.addEventListener('click', completeTask);
    function completeTask(){
        completedBtn.style.backgroundColor = 'green';
        inProgressBtn.style.backgroundColor = '';
    }
    taskItem.appendChild(completedBtn);

    // Add a In progress button to the task
    const inProgressBtn = document.createElement('button');
    inProgressBtn.textContent = 'In Progress';
    inProgressBtn.addEventListener('click', inProgressTask);
    function inProgressTask(){
        inProgressBtn.style.backgroundColor = 'yellow';
        completedBtn.style.backgroundColor = '';
    }
    taskItem.appendChild(inProgressBtn);
    
}





