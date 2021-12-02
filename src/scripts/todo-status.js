const updateCompletedStatus = (todos) => {
  const statusButtons = document.querySelectorAll('.tick');

  const tickAsCompleted = (btn) => {
    btn.classList.toggle('check');
  };

  const updateTodosArray = (todoArray, index, button) => {
    if (button.classList.contains('check')) {
      todoArray[index].completed = true;
    } else {
      todoArray[index].completed = false;
    }
  };

  statusButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      tickAsCompleted(button);
      updateTodosArray(todos, index, button);
    });
  });
};

export default updateCompletedStatus;
