import '../styles/styles.css';
import '@fortawesome/fontawesome-free/js/fontawesome.js';
import '@fortawesome/fontawesome-free/js/solid.js';
import '@fortawesome/fontawesome-free/js/regular.js';
import '@fortawesome/fontawesome-free/js/brands.js';

import updateCompletedStatus from './todo-status.js';
import { addNewTodo, editTodoDescription } from './update-todos.js';

const todoParent = document.querySelector('body div');
const storage = window.localStorage;

todoParent.id = 'parent';

let todos;
if (storage.getItem('todos') === null) {
  todos = [];
} else {
  const storedTodos = JSON.parse(storage.getItem('todos'));

  todos = [...storedTodos];
}

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

const todoItem = (todo, className = 'tick') => {
  const listMarkup = `<li class="handb txtarea"> <button type="button" class=${className}></button> <div class="center"><label for=${todo.description}>${todo.description}</label>
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
    if (todo.completed) {
      listItems += todoItem(todo, 'tick check');
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
  let formElement;
  let lastChild;
  const list = generateTodoList(todos);

  todoParent.innerHTML = generateOtherTodoElements();
  lastChild = document.querySelector('#parent .btnp');
  formElement = document.querySelector('form');

  todoParent.insertBefore(list, lastChild);
  formElement.addEventListener('submit', () => {
    addNewTodo(todos);
  });
};

// const generateTodoTemplate = (todoParam) => {
//   let listItem = '';

//   todoParam.forEach((todo) => {
//     if (todo.completed === true) {
//       listItem += `<li class="handb txtarea"> <button type="button" class='tick check'></button> <div class="center"><label class="fade" for=${todo.description}>${todo.description}</label>
//       <input id=${todo.description} name="todo"></input></div>
//       <i class="fas fa-trash-alt ic hide"></i>
//       <i class="fas fa-ellipsis-v ic"></i>
//       </li> `;
//     } else {
//       listItem += `<li class="handb txtarea"> <button type="button" class='tick'></button> <div class="center"><label class="" for=${todo.description}>${todo.description}</label>
//       <input id=${todo.description} name="todo"></input></div>
//       <i class="fas fa-trash-alt ic hide"></i>
//       <i class="fas fa-ellipsis-v ic"></i>
//       </li> `;
//     }
//     list.innerHTML = listItem;
//   });

//   editTodoDescription(todoParam);
// };

// const createTodoList = () => {
//   generateTodoTemplate(todos);
//   todoParent.appendChild(list);
//   formElement.addEventListener('submit', () => {
//     addNewTodo(todos);
//     generateTodoTemplate(todos);
//     storage.setItem('todos', JSON.stringify(todos));
//   });
// };

// const clearAllCompleted = () => {
//   const notCompleted = todos.filter((todo) => !todo.completed);
//   storage.setItem('todos', JSON.stringify(notCompleted));
//   window.location.reload();
// };

// button.addEventListener('click', () => {
//   clearAllCompleted();
// });

const load = () => {
  createTodoListStructure();
  // createTodoList();
  // updateCompletedStatus(todos);
  // editTodoDescription(todos);
  // addCompletedButton();
};

window.onload = load;
