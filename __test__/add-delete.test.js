/** * @jest-environment jsdom */
import { addNewTodo, deleteTodoItem } from '../src/scripts/update-todos.js';

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
});
