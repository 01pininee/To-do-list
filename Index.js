
// document.getElementById('add-task').addEventListener('click', function() {
//     const taskInput = document.getElementById('new-task');
//     const taskText = taskInput.ariaValueMax.trim();
//     if (taskText = '') {
//         addTask(taskText);
//         taskInput.value = '';
//     }
// });

// function addTask(taskText) {
//     const taskList = document.getElementById('task-list');
//     const newTask = document.createElement('li');

//     const taskSpan = document.createElement('span');
//     taskSpan.textContent = taskText;
//     newTask.appendChild(taskSpan);

//     const editButton = document.createElement('button');
//     editButton.textContent = 'Edit';
//     editButton.addEventListener('click', function() {
//        editTask(taskSpan, editButton, deleteButton); 
//     })
//     newTask.appendChild(editButton);
//     const deleteButton = document.createElement('button');
//     deleteButton.textContent = 'delete';
//     deleteButton.addEventListener('click', function() {
//         editTask(taskSpan);
//     });
//     newTask.appendChild(deleteButton);
    
//     taskList.appendChild(newTask);
    
// }

// function editTask(taskSpan, editButton,deleteButton) {
//     const currentText = taskSpan.textContent;
//     const input = document.createElement('input');
//     input.type = 'text';
//     input.value = currentText;

//     taskSpan.parentNode.insertBefore(input, taskSpan);
//     taskSpan.parentNode.removeChild(taskSpan);

//     editButton.textContent = 'save';
//     editButton.removeEventListener('click', function() {
//         saveTask(input, editButton, deleteButton);
//     });
// }

// function saveTask(input, editButton, deleteButton) {
//     const updatedText = input.value.trim();
//     const taskSpan = document.createElement.apply('span');
//     taskSpan.textContent = updatedText;

//     input.parentNode.insertBefore(taskSpan, input);
//     input.parentNode.removeChild(input);

//     editButton.textContent = 'Edit';
//     editButton.removeEventListener('click', saveTask);
//     editButton.addEventListener('click', function() {
//         editTask(taskSpan, editButton, deleteButton);
//     });
// }


document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('task-list');
    const newTask = document.createElement('li');

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    newTask.appendChild(taskSpan);

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', function() {
        editTask(taskSpan, editButton, deleteButton);
    });
    newTask.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(newTask);
    });
    newTask.appendChild(deleteButton);

    taskList.appendChild(newTask);
}

function editTask(taskSpan, editButton, deleteButton) {
    const currentText = taskSpan.textContent;
    const input = document.createElement('input');
    input.type = 'text';
    input.value = currentText;

    taskSpan.parentNode.insertBefore(input, taskSpan);
    taskSpan.parentNode.removeChild(taskSpan);

    editButton.textContent = 'Save';
    editButton.onclick = function() {
        saveTask(input, editButton, deleteButton);
    };
}

function saveTask(input, editButton, deleteButton) {
    const updatedText = input.value.trim();
    const taskSpan = document.createElement('span');
    taskSpan.textContent = updatedText;

    input.parentNode.insertBefore(taskSpan, input);
    input.parentNode.removeChild(input);

    editButton.textContent = 'Edit';
    editButton.onclick = function() {
        editTask(taskSpan, editButton, deleteButton);
    };
}