/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  listOfTodo;

  constructor() {
    this.listOfTodo = [];
  }

  add(todo) {
    this.listOfTodo.push(todo);
  }

  remove(indexOfTodo) {
    if (indexOfTodo < this.listOfTodo.length)
      this.listOfTodo.splice(indexOfTodo, 1);
  }

  update(index, updatedTodo) {
    if (index < this.listOfTodo.length)
      this.listOfTodo[index] = updatedTodo;
  }

  getAll() {
    return this.listOfTodo;
  }

  get(indexOfTodo) {
    if (indexOfTodo < this.listOfTodo.length)
      return this.listOfTodo[indexOfTodo];
    else
      return null;
  }

  clear() {
    this.listOfTodo = [];
  }

}

module.exports = Todo;
