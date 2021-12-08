export const updateListDomAsCompleted = (button) => {
  const todoLabel = button.nextElementSibling.firstChild;
  button.classList.toggle('check');
  todoLabel.classList.toggle('fade');
};

export const updateTodoCompletedStatus = (todos, index, button) => {
  const storage = window.localStorage;
  const updatedTodos = todos.slice();

  if (button.classList.contains('check')) {
    updatedTodos[index].completed = true;
  } else {
    updatedTodos[index].completed = false;
  }
  storage.setItem('todos', JSON.stringify(updatedTodos));
};
