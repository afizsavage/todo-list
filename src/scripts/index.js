import '../styles/styles.css';
import '@fortawesome/fontawesome-free/js/fontawesome.js';
import '@fortawesome/fontawesome-free/js/solid.js';
import '@fortawesome/fontawesome-free/js/regular.js';
import '@fortawesome/fontawesome-free/js/brands.js';

import {
  addNewTodo,
  clearAllCompleted,
  conditionallyDeleteTodoItem,
  editTodoDescription,
  toggleTodoDescriptionEditField,
} from './update-todos.js';
import {
  updateListDomAsCompleted,
  updateTodoCompletedStatus,
} from './todo-status.js';

const todoParent = document.querySelector('body div');
const storage = window.localStorage;

todoParent.id = 'parent';

const getTodos = () => {
  let todos;
  if (storage.getItem('todos') === null) {
    todos = [];
  } else {
    const storedTodos = JSON.parse(storage.getItem('todos'));

    todos = [...storedTodos];
  }

  return todos;
};

const todos = getTodos();

const todoHeader = () => {
  const markup = `<div class="handb"><h1>Today's To Do</h1>
  <i class="fas fa-sync"></i>
  </div>`;

  return markup;
};

const addTodoForm = () => {
  const markup = `<form class="handb"><input id="mxqrz" placeholder="Add to your list...">
  </input><input type="submit" id="submit" title="Click this or press enter to submit"></input> </form>`;

  return markup;
};

const todoItem = (todo, check = '', fade = '') => {
  const listMarkup = `<li class="handb txtarea"> <button type="button" class="tick ${check}"></button> <div class="center"><label class=${fade} for=${todo.description}>${todo.description}</label>
  <input id=${todo.description} name="todo"></input></div>
  <i class="fas fa-trash-alt ic hide"></i>
  <i class="fas fa-ellipsis-v ic"></i>
  </li>`;

  return listMarkup;
};

const clearAllCompletedBtn = () => {
  const markup = `<div class="btnp"><button>Clear all completed
  </button></div>`;

  return markup;
};

const generateTodoList = (todosArg) => {
  const list = document.createElement('ul');

  let listItems = '';
  todosArg.forEach((todo) => {
    if (todo.completed === true) {
      listItems += todoItem(todo, 'check', 'fade');
    } else {
      listItems += todoItem(todo);
    }
    list.innerHTML = listItems;
  });

  return list;
};

const generateOtherTodoElements = () => {
  let childNodes = todoHeader();

  childNodes += addTodoForm();
  childNodes += clearAllCompletedBtn();

  return childNodes;
};

const createTodoListStructure = () => {
  const list = generateTodoList(todos);

  todoParent.innerHTML = generateOtherTodoElements();
  const lastChild = document.querySelector('#parent .btnp');
  const formElement = document.querySelector('form');
  const clearCompletedBtn = document.querySelector('.btnp button');

  todoParent.insertBefore(list, lastChild);
  const checkboxes = document.querySelectorAll('.tick');
  const descriptionLabels = document.querySelectorAll('.center label');

  formElement.addEventListener('submit', () => {
    addNewTodo(todos);
  });

  checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener('click', (event) => {
      updateListDomAsCompleted(event.target);
      updateTodoCompletedStatus(todos, index, event.target);
    });
  });

  descriptionLabels.forEach((label, index) => {
    label.addEventListener('click', (event) => {
      event.preventDefault();
      toggleTodoDescriptionEditField(event.target, todos, index, true);
    });

    label.nextElementSibling.addEventListener('blur', (event) => {
      editTodoDescription(todos, index, event.target.value);
      conditionallyDeleteTodoItem(todos, event.target);
      toggleTodoDescriptionEditField(event.target, todos, index);
    });

    label.nextElementSibling.addEventListener('keyup', (event) => {
      if (event.keyCode === 13) {
        editTodoDescription(todos, index, event.target.value);
        conditionallyDeleteTodoItem(todos, event.target);
        toggleTodoDescriptionEditField(event.target, todos, index);
      }
    });
  });
  clearCompletedBtn.addEventListener('click', () => {
    clearAllCompleted(todos);
  });
};

const load = () => {
  createTodoListStructure();
};

window.onload = load;
