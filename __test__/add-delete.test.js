/** * @jest-environment jsdom */
import { updateTodoCompletedStatus } from '../src/scripts/todo-status.js';
import {
  addNewTodo,
  deleteTodoItem,
  editTodoDescription,
} from '../src/scripts/update-todos.js';

describe('adding and deleting todos', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();

    localStorage.setItem.mockClear();
  });
  test('should save to localStorage', () => {
    document.body.innerHTML = `<div><input id="mxqrz" type="text" value="drape">
          </input> </div>`;

    const sampleData = [];
    const key = 'todos';
    const valueToAdd = [{ description: 'drape', completed: false, index: 0 }];
    const expected = JSON.stringify(valueToAdd);

    addNewTodo(sampleData);
    expect(localStorage.setItem).toHaveBeenLastCalledWith(key, expected);
  });
  test('should remove item from localStorage', () => {
    const sampleData = [];
    const key = 'todos';
    const valueToDelete = [{ description: '', completed: false, index: 0 }];
    const expected = JSON.stringify(sampleData);

    deleteTodoItem(valueToDelete);
    expect(localStorage.setItem).toHaveBeenLastCalledWith(key, expected);
  });
  test('should update todo completed status', () => {
    document.body.innerHTML = `<div><button id="mxqrz" class="tick check" type="text" value="drape">
          </button> </div>`;

    const testElement = document.getElementById('mxqrz');
    const sampleData = [{ description: 'test us', completed: false, index: 0 }];
    const updatedData = [{ description: 'test us', completed: true, index: 0 }];
    const expectedRes = JSON.stringify(updatedData);

    updateTodoCompletedStatus(sampleData, 0, testElement);
    expect(localStorage.setItem).toHaveBeenLastCalledWith('todos', expectedRes);
  });
});
