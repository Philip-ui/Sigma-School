const todos = JSON.parse(localStorage.getItem("todos")) || [];

function syncTodosToDOM() {
  const taskList = document.querySelector(".task-list");
  taskList.innerHTML = "";

  todos.sort((a, b) => b.rating - a.rating); // Sort todos by rating (descen

  todos.forEach((todo, index) => {
    
    // If deleted filter is selected, no need to display todos that are NOT deleted
    if (filterDeleted.checked && todo.isDeleted === false) return;

    const todoItem = document.createElement("div");
    todoItem.classList.add("task-item");
    todoItem.classList.add(`rating-${todo.rating}`); // Add rating class to differentiate colors

  //  if (todo.isPriority) {
  //    todoItem.classList.add("priority");
  //  }

    if (todo.isDeleted) {
        todoItem.classList.add("deleted");
    }

    todoItem.innerHTML = `
            <input type="checkbox" 
                onchange="toggleTodo(${index})" 
                ${todo.isDeleted ? "checked" : ""}
            />
            <p>${todo.title}</p>        
            <button class="edit-btn" onclick="editTodoTitle(${index})">Edit</button>            
        `;

    taskList.appendChild(todoItem);
  });

  // Save the Single source of truth (todos) into localStorage
  localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodo() {
  const input = document.querySelector(".add-todo-form input");
  const ratingInput = document.querySelector(".add-todo-form input[type='number']");
  const value = input.value;
  const rating = parseInt(ratingInput.value);

  if (value === "" || isNaN(rating) || rating < 1 || rating > 5) {
    alert("Please enter a valid task and rating (1 to 5). No empty string ok?");
    return;
  }  

  const newTodo = {
    title: value,
    rating: rating,
    isDeleted: false,
    isPriority: false,
  };

  todos.push(newTodo);
  syncTodosToDOM();

  input.value = "";
  ratingInput.value = "";
}

function removeTodo(index) {
  todos.splice(index, 1);
  syncTodosToDOM();
}

function toggleTodo(index) {
  todos[index].isDeleted = !todos[index].isDeleted;
  syncTodosToDOM();
}

function togglePriority(index) {
  todos[index].isPriority = !todos[index].isPriority;
  syncTodosToDOM();
}

function editTodoTitle(index) {
  const todoItem = todos[index];
  const newTitle = prompt("Enter a new title", todoItem.title);

  if (newTitle === null || newTitle.trim() === "") {
    return; // If the user cancels or provides an empty title, do nothing
  }

  todoItem.title = newTitle.trim();
  syncTodosToDOM();
}

// Prevent form refresh
const form = document.querySelector(".add-todo-form");
form.addEventListener("submit", (e) => e.preventDefault());

// Setup event listeners for filters
const filterAll = document.querySelector("#filter-all");
const filterDeleted = document.querySelector("#filter-deleted");
filterAll.addEventListener("change", () => syncTodosToDOM());
filterDeleted.addEventListener("change", () => syncTodosToDOM());

// Create todos on initial page load
syncTodosToDOM();
