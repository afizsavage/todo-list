const storage = window.localStorage;

class Todo {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

export const addNewTodo = (todos) => {
  const addInput = document.getElementById('mxqrz');
  const todo = new Todo(addInput.value, false, todos.length);
  const updated = [...todos, todo];
  storage.setItem('todos', JSON.stringify(updated));
};

export const deleteTodoItem = (allTodo) => {
  const updatedTodos = allTodo.filter((todo) => todo.description !== '');
  storage.setItem('todos', JSON.stringify(updatedTodos));
};

export const editTodoDescription = (todos, index, value) => {
  const updatedTodos = todos.slice();
  updatedTodos[index].description = value;
  storage.setItem('todos', JSON.stringify(updatedTodos));
};

const removeDeletedItemFromDom = () => {
  window.location.reload();
};

export const conditionallyDeleteTodoItem = (todos, item) => {
  if (item.value.length < 1) {
    deleteTodoItem(todos);
    removeDeletedItemFromDom();
  }
};

export const clearAllCompleted = (todosParam) => {
  const notCompleted = todosParam.filter((todo) => !todo.completed);
  storage.setItem('todos', JSON.stringify(notCompleted));
  window.location.reload();
};

export const toggleTodoDescriptionEditField = (
  targetElement,
  todos,
  index,
  activate = false,
) => {
  if (activate === true) {
    targetElement.nextElementSibling.value = todos[index].description;
    targetElement.nextElementSibling.classList.add('show');
    targetElement.nextElementSibling.focus();
    targetElement.parentNode.parentNode.classList.add('edit');
    targetElement.parentNode.parentNode.lastElementChild.classList.add('hide');

    targetElement.parentNode.parentNode.lastElementChild.previousElementSibling.classList.remove(
      'hide',
    );
    targetElement.classList.add('hide');
  } else {
    targetElement.previousElementSibling.textContent = todos[index].description;
    targetElement.previousElementSibling.classList.remove('hide');
    targetElement.parentNode.parentNode.classList.remove('edit');
    targetElement.parentNode.parentNode.lastElementChild.classList.remove(
      'hide',
    );

    targetElement.parentNode.parentNode.lastElementChild.previousElementSibling.classList.add(
      'hide',
    );
    targetElement.classList.remove('show');
  }
};
