document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById('todo-list');

        // Create new list item
        const li = document.createElement('li');

        // Create checkbox to select task completion
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        
        
       
        // Task span for task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        //Add event listener to mark task as completed when checkbox is clicked
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                li.classList.add('completed');
                 
            } else {
                li.classList.remove('completed');
            }
        });

         

        // Delete task when delete button is clicked
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        // Add checkbox, task text, and delete button to the list item
        li.appendChild(checkbox);
        li.appendChild(taskSpan);
        li.appendChild(deleteButton);

        // Append list item to task list
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = '';
    }
});
