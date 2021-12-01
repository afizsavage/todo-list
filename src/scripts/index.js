import '../styles/styles.css';

const todos = [
  { description: 'Build house', completed: false, index: 0 },
  { description: 'Build car', completed: false, index: 1 },
  { description: 'Party', completed: false, index: 2 },
];
const list = document.querySelector('ul');

const addHeading = () => {
  const heading = document.createElement('h1');
  heading.textContent = 'Today,s Todo';
  return heading;
};

const addTopElements = () => {
  const input = document.createElement('input');
  document.body.insertBefore(addHeading(), list);
  document.body.insertBefore(input, list);
};

const createTodoList = () => {
  let listItem = '';
  todos.forEach((todo) => {
    listItem += `<li> <input type="checkbox" id="C" name="C" value="C"/>  
    <label>${todo.description}</label></li> `;
    list.innerHTML = listItem;
  });
};

const load = () => {
  addTopElements();
  createTodoList();
};

window.onload = load;
