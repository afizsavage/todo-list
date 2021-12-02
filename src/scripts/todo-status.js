const updateCompletedStatus = () => {
  const tickAsCompleted = (btn) => {
    btn.classList.toggle('check');
  };

  const statusButtons = document.querySelectorAll('.tick');
  statusButtons.forEach((button) => {
    button.addEventListener('click', () => {
      tickAsCompleted(button);
    });
  });
};

export default updateCompletedStatus;
