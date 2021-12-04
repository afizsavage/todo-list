import updateCompletedStatus from './todo-status';

class Todo {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}
const generateTodo = (todos) => {
  const list = document.getElementsByTagName('ul');
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

export const editTodoDescription = (todos) => {
  const storage = window.localStorage;
  const descriptions = document.querySelectorAll('.center label');

  descriptions.forEach((description, index) => {
    description.addEventListener('click', () => {
      description.parentNode.parentNode.classList.add('edit');
      description.classList.add('hide');
      description.nextElementSibling.classList.add('show');
      description.nextElementSibling.addEventListener('keyup', (event) => {
        if (event.keyCode === 13) {
          event.preventDefault();
          description.classList.remove('hide');
          event.target.classList.remove('show');
          description.parentNode.parentNode.classList.remove('edit');
          todos[index].description = event.target.value;
          storage.setItem('todos', JSON.stringify(todos));
          generateTodo(todos);
        }
      });
    });
  });
};

export const addNewTodo = (todos) => {
  const addInput = document.getElementById('add');
  const todo = new Todo(addInput.value, false, todos.length);
  todos.push(todo);
};
