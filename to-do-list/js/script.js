import { addTodo, removeAllTodos } from "./render.js";

const todoForm = document.querySelector("#todo-form");
const btn = document.querySelector("#btn");
const todoList = document.querySelector("#todo-list");
const todoInput = document.querySelector("#todo-input");

const cleanItemsImg = document.querySelector("#cleanItemsImg");
const cleanItems = document.querySelector("#cleanItems");
cleanItems.addEventListener("click", function () {
  cleanItems.style.color = "#FF0000";
  removeAllTodos(todoList, cleanItemsImg);
});
todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  btn.textContent = "Save";
  btn.style.background = "#00C45A";
  addTodo();
  todoInput.value = "";
});
