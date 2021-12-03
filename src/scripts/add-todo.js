class Todo {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const addNewTodo = (todos) => {
  const addInput = document.getElementById('add');
  const todo = new Todo(addInput.value, false, todos.length);
  // const newTodos = [...todos, todo];
  // return newTodos;
  todos.push(todo);
};
export default addNewTodo;
