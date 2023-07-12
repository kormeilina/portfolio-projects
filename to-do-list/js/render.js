const todoList = document.querySelector("#todo-list");
let todos = JSON.parse(localStorage.getItem("todos")) || [];

export function addTodo() {
  const todoInput = document.querySelector("#todo-input");
  const todoText = todoInput.value;
  if (todoText !== "") {
    const todoItem = {
      text: todoText,
      id: Date.now(),
    };
    todos.push(todoItem);
    localStorage.setItem("todos", JSON.stringify(todos));
    const listItemHTML = `
      <li data-id="${todoItem.id}">
        <span class="textSpan">${todoText}</span>
        <div class="btnSpan">
          <button class="save">Save</button>
          <button class="delete">Delete</button>
        </div>
      </li>
    `;
    todoList.innerHTML += listItemHTML;
  }
}

todoList.addEventListener("click", function (e) {
  if (e.target.matches(".save")) {
    e.target.style.backgroundColor = "#FF3D00";
  } else if (e.target.matches(".delete")) {
    e.target.style.backgroundImage = "url(./pic/close-circle.svg)";
    e.target.style.color = "#949494";
    const li = e.target.closest("li");
    const id = li.dataset.id;
    const index = todos.findIndex((todo) => todo.id == id);
    if (index > -1) {
      todos.splice(index, 1);
    }
    localStorage.setItem("todos", JSON.stringify(todos));
  }
});

export function removeAllTodos(todoList, cleanItemsImg) {
  todoList.innerHTML = "";
  localStorage.removeItem("todos");
  cleanItemsImg.src = "./pic/trash_red.svg";
}
