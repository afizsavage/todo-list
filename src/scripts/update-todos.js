class Todo {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}
export const editTodoDescription = () => {
  const descriptions = document.querySelectorAll('.center label');
  descriptions.forEach((description) => {
    description.addEventListener('click', () => {
      console.log('clicked');
    });
  });
  console.log(descriptions);
};

export const addNewTodo = (todos) => {
  const addInput = document.getElementById('add');
  const todo = new Todo(addInput.value, false, todos.length);
  todos.push(todo);
};
