import '../styles/styles.css';
import '@fortawesome/fontawesome-free/js/fontawesome.js';
import '@fortawesome/fontawesome-free/js/solid.js';
import '@fortawesome/fontawesome-free/js/regular.js';
import '@fortawesome/fontawesome-free/js/brands.js';

import updateCompletedStatus from './todo-status.js';
import { addNewTodo, editTodoDescription } from './update-todos.js';

const list = document.createElement('ul');
const todoParent = document.querySelector('body div');
const storage = window.localStorage;
const addTodoForm = document.createElement('form');
let descriptions;

todoParent.id = 'parent';

let todos;
if (storage.getItem('todos') === null) {
  todos = [];
} else {
  const storedTodos = JSON.parse(storage.getItem('todos'));

  todos = [...storedTodos];
}

const addTodoHeader = () => {
  const headerParent = document.createElement('div');
  const heading = document.createElement('h1');
  const refreshIcon = document.createElement('i');

  headerParent.classList.add('handb');
  refreshIcon.className = 'fas fa-sync';
  heading.textContent = 'Today,s To Do';
  headerParent.appendChild(heading);
  headerParent.appendChild(refreshIcon);
  todoParent.appendChild(headerParent);
};

const createAddTodoForm = () => {
  const addInput = document.createElement('input');
  const submitButton = document.createElement('input');

  addTodoForm.classList.add('handb');
  addInput.id = 'add';
  addInput.placeholder = 'Add to your list...';
  submitButton.type = 'submit';
  submitButton.id = 'submit';
  submitButton.title = 'Click this or press enter to submit';

  addTodoForm.appendChild(addInput);
  addTodoForm.appendChild(submitButton);
  todoParent.appendChild(addTodoForm);
};

const generateTodoTemplate = (todoParam, listParam) => {
  todoParam.forEach((todo) => {
    if (todo.completed === true) {
      listParam += `<li class="handb txtarea"> <button type="button" class='tick check'></button> <div class="center"><label class="fade" for="todo">${todo.description}</label>
      <textarea id="todo" name="todo"></textarea></div>
      <i class="fas fa-ellipsis-v ic"></i>
      </li> `;
    } else {
      listParam += `<li class="handb txtarea"> <button type="button" class='tick'></button> <div class="center"><label class="" for="todo">${todo.description}</label>
      <textarea id="todo" name="todo"></textarea></div>
      <i class="fas fa-ellipsis-v ic"></i>
      </li> `;
    }
    list.innerHTML = listParam;
  });
  descriptions = document.querySelectorAll('.center label');

  descriptions.forEach((description) => {
    description.addEventListener('click', () => {
      console.log('clicked');
    });
  });
  console.log(descriptions);
};

const createTodoList = () => {
  const listItem = '';

  generateTodoTemplate(todos, listItem);
  todoParent.appendChild(list);
  addTodoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    addNewTodo(todos);
    generateTodoTemplate(todos, listItem);
    storage.setItem('todos', JSON.stringify(todos));
    updateCompletedStatus(todos);
  });
};

const addCompletedButton = () => {
  const parentElement = document.createElement('div');
  const button = document.createElement('button');

  parentElement.className = 'btnp';
  button.textContent = 'Clear all completed';
  parentElement.appendChild(button);
  todoParent.appendChild(parentElement);
};

const load = () => {
  addTodoHeader();
  createAddTodoForm();
  createTodoList();
  addCompletedButton();
  updateCompletedStatus(todos);
  // editTodoDescription();
  descriptions = document.querySelectorAll('.center label');
  descriptions.forEach((description) => {
    description.addEventListener('click', () => {
      console.log('clicked');
    });
  });
  console.log(descriptions);
};

window.onload = load;
