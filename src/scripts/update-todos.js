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

export const editTodoDescription = (todos, index, event) => {
  const updatedTodos = todos.slice();
  updatedTodos[index].description = event.target.value;
  storage.setItem('todos', JSON.stringify(updatedTodos));
};

export const openTodoDescriptionEditField = (label, todos, index) => {
  label.nextElementSibling.value = todos[index].description;
  label.nextElementSibling.classList.add('show');
  label.parentNode.parentNode.classList.add('edit');
  label.parentNode.parentNode.lastElementChild.classList.toggle('hide');

  label.parentNode.parentNode.lastElementChild.previousElementSibling.classList.remove(
    'hide'
  );
  label.classList.add('hide');
};

// export const editLabel = (todosParam, index, des, event) => {
//   event.preventDefault();
//   event.target.classList.remove('show');
//   des.classList.remove('hide');
//   des.parentNode.parentNode.classList.remove('edit');

//   todosParam[index].description = event.target.value;
//   deleteTodoItem(todosParam);
// };

// export const editTodoDescription = (todos) => {
//   const descriptions = document.querySelectorAll('.center label');

//   descriptions.forEach((description, index) => {
//     description.addEventListener('click', () => {
//       description.nextElementSibling.value = todos[index].description;
//       description.nextElementSibling.classList.add('show');
//       description.parentNode.parentNode.classList.add('edit');
//       description.parentNode.parentNode.lastElementChild.classList.toggle(
//         'hide'
//       );

//       description.parentNode.parentNode.lastElementChild.previousElementSibling.classList.remove(
//         'hide'
//       );
//       description.classList.add('hide');

//       description.nextElementSibling.addEventListener('keyup', (event) => {
//         if (event.keyCode === 13) {
//           event.preventDefault();
//           editLabel(todos, index, description, event);
//         }
//       });
//       description.nextElementSibling.addEventListener('blur', (event) => {
//         editLabel(todos, index, description, event);
//       });
//     });
//   });
// };
