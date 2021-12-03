const updateCompletedStatus = (todos) => {
  const statusButtons = document.querySelectorAll('.tick');
  const storage = window.localStorage;

  const tickAsCompleted = (btn) => {
    const todoLabel = btn.nextElementSibling.firstChild;
    btn.classList.toggle('check');
    todoLabel.classList.toggle('fade');
  };

  const updateTodosArray = (todoArray, index, button) => {
    if (button.classList.contains('check')) {
      todoArray[index].completed = true;
    } else {
      todoArray[index].completed = false;
    }
    storage.setItem('todos', JSON.stringify(todoArray));
  };

  statusButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      tickAsCompleted(button);
      updateTodosArray(todos, index, button);
    });
  });
};

export default updateCompletedStatus;
