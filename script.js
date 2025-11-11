//your code here

// script.js
document.addEventListener('DOMContentLoaded', function() {
    const addTodoBtn = document.getElementById('addTodoBtn');
    const newTodoInput = document.getElementById('newTodoInput');
    const todoList = document.getElementById('todoList');

    addTodoBtn.addEventListener('click', function() {
        const todoText = newTodoInput.value.trim();
        
        if (todoText !== '') {
            const li = document.createElement('li');
            li.textContent = todoText;
            todoList.appendChild(li);
            newTodoInput.value = '';
        }
    });
});