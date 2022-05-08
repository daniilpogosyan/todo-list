import Todo from './Todo'
import {getNewId} from './utility'

export default class Project {
  constructor(title, description, id) {
    this.title = title;
    this.description = description;
    this.todos = [];
    Object.defineProperty(this, 'id', {
      value: id != undefined? id : getNewId(),
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