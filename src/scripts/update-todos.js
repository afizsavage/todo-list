const storage = window.localStorage;

class Todo {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const deleteTodo = (allTodo) => {
  const yew = allTodo.filter((to) => to.description !== '');
  storage.setItem('todos', JSON.stringify(yew));
  window.location.reload();
};

const editLabel = (todosParam, index, des, event) => {
  event.preventDefault();
  event.target.classList.remove('show');
  des.classList.remove('hide');
  des.parentNode.parentNode.classList.remove('edit');

  todosParam[index].description = event.target.value;
  deleteTodo(todosParam);
};

export const editTodoDescription = (todos) => {
  const descriptions = document.querySelectorAll('.center label');

  descriptions.forEach((description, index) => {
    description.addEventListener('click', () => {
      description.nextElementSibling.value = todos[index].description;
      description.nextElementSibling.classList.add('show');
      description.parentNode.parentNode.classList.add('edit');
      description.parentNode.parentNode.lastElementChild.classList.toggle('hide');

      description.parentNode.parentNode.lastElementChild.previousElementSibling.classList.remove('hide');
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

export const addNewTodo = (todos) => {
  const addInput = document.getElementById('mxqrz');
  const todo = new Todo(addInput.value, false, todos.length);
  todos.push(todo);
};
