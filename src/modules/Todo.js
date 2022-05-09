import {getNewId} from './utility'

export default class Todo  {
  constructor(title, priority = 0, done, id, dueTime) {
    this.title = title;
    this.done = done || false;
    this.dueTime = dueTime || new Date();
    this.priority = priority;
    Object.defineProperty(this, 'id', {
      value: id != undefined? id : getNewId(),
      writable: false,
      enumerable: true,
    })
  }
}