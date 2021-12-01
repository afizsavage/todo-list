import '../styles/styles.css';

const todos = [
  { description: 'Build house', completed: false, index: 0 },
  { description: 'Build car', completed: false, index: 1 },
  { description: 'Party', completed: false, index: 2 },
];
const list = document.createElement('ul');
const todoParent = document.querySelector('body div');
todoParent.id = 'parent';
const button = document.createElement('button');

const addHeading = () => {
  const heading = document.createElement('h1');
  heading.textContent = 'Today,s Todo';
  return heading;
};

const createTodoList = () => {
  let listItem = '';
  todos.forEach((todo) => {
    listItem += `<li> <input type="checkbox" id="C" name="C" value="C"/>  
    <label>${todo.description}</label></li> `;
    list.innerHTML = listItem;
  });
  todoParent.appendChild(list);
};

const addTopElements = () => {
  const headerParent = document.createElement('div');
  const input = document.createElement('input');
  headerParent.classList.add('handb');
  headerParent.appendChild(addHeading());
  input.placeholder = 'Add to your list...';
  todoParent.appendChild(headerParent);
  todoParent.appendChild(input);
};

const load = () => {
  addTopElements();
  createTodoList();
};

window.onload = load;
