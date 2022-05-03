import Todo from './Todo'
import {getNewId} from './utility'

export default class Project {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.todos = [new Todo('task1'), new Todo('task2'), new Todo('task2')];
    Object.defineProperty(this, 'id', {
      value: getNewId(),
      writable: false,
    })
  }

  addTodo(todo) {
    if (todo instanceof Todo)
      this.todos.push(todo)
  }
  
  removeTodo(todoId) {
    const todoIndex = this.todos.findIndex((todo) => todo.id == todoId);
    if (todoIndex >= 0) {
      this.todos.splice(todoIndex, 1);
      return true;
    }
  }
}