import updateCompletedStatus from './todo-status.js';

const storage = window.localStorage;
let generateTodo;

class Todo {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const editLabel = (todosParam, index, des, event) => {
  event.preventDefault();
  event.target.classList.remove('show');
  des.classList.remove('hide');
  des.parentNode.parentNode.classList.remove('edit');
  todosParam[index].description = event.target.value;
  const yew = todosParam.filter((to) => to.description !== '');
  storage.setItem('todos', JSON.stringify(yew));
  generateTodo(yew);
  event.target.parentNode.parentNode.remove();
};

export const editTodoDescription = (todos) => {
  const descriptions = document.querySelectorAll('.center label');

  descriptions.forEach((description, index) => {
    description.addEventListener('click', () => {
      description.nextElementSibling.classList.add('show');
      description.parentNode.parentNode.classList.add('edit');
      description.classList.add('hide');
      description.nextElementSibling.addEventListener('keyup', (event) => {
        if (event.keyCode === 13) {
          event.preventDefault();
          editLabel(todos, index, description, event);
        }
      });
      description.nextElementSibling.addEventListener('blur', (event) => {
        editLabel(todos, index, description, event);
      });
    });
  });
};

generateTodo = (todos) => {
  const todoParent = document.getElementById('parent');
  let listItem = '';
  todos.forEach((todo) => {
    if (todo.completed === true) {
      listItem += `<li class="handb txtarea"> <button type="button" class='tick check'></button> <div class="center"><label class="fade" for=${todo.description}>${todo.description}</label>
      <input id=${todo.description} name="todo"></input></div>
      <i class="fas fa-ellipsis-v ic"></i>
      </li> `;
    } else {
      listItem += `<li class="handb txtarea"> <button type="button" class='tick'></button> <div class="center"><label class="" for=${todo.description}>${todo.description}</label>
      <input id=${todo.description} name="todo"></input></div>
      <i class="fas fa-ellipsis-v ic"></i>
      </li> `;
    }
    todoParent.childNodes[2].innerHTML = listItem;
  });
  updateCompletedStatus(todos);
  editTodoDescription(todos);
};

export const addNewTodo = (todos) => {
  const addInput = document.getElementById('add');
  const todo = new Todo(addInput.value, false, todos.length);
  todos.push(todo);
};
