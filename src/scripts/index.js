import '../styles/styles.css';
import '@fortawesome/fontawesome-free/js/fontawesome.js';
import '@fortawesome/fontawesome-free/js/solid.js';
import '@fortawesome/fontawesome-free/js/regular.js';
import '@fortawesome/fontawesome-free/js/brands.js';
import updateCompletedStatus from './todo-status.js';

const todos = [
  { description: 'Build house', completed: false, index: 0 },
  { description: 'Build car', completed: false, index: 1 },
  { description: 'Party', completed: false, index: 2 },
];
const list = document.createElement('ul');
const todoParent = document.querySelector('body div');
todoParent.id = 'parent';

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
  const addTodoForm = document.createElement('form');
  const addInput = document.createElement('input');
  const submitButton = document.createElement('input');

  addTodoForm.classList.add('handb');
  addInput.id = 'add';
  addInput.placeholder = 'Add to your list...';
  submitButton.type = 'submit';
  submitButton.id = 'submit';
  submitButton.title = 'Click this or press enter to submit';
  submitButton.className = 'fas fa-level-down-alt trn';

  addTodoForm.appendChild(addInput);
  addTodoForm.appendChild(submitButton);
  todoParent.appendChild(addTodoForm);
};

const createTodoList = () => {
  let listItem = '';
  todos.forEach((todo) => {
    listItem += `<li class="handb txtarea"> <button type="button" class='tick'></button> <div class="center"><label for="todo">${todo.description}</label>
    <textarea id="todo" name="todo"></textarea></div>
    <i class="fas fa-ellipsis-v ic"></i>
    </li> `;
    list.innerHTML = listItem;
  });
  todoParent.appendChild(list);
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
};

window.onload = load;
