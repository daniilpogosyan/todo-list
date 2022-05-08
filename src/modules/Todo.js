import {getNewId} from './utility'

export default class Todo  {
  constructor(title, priority = 0, done, id) {
    this.title = title;
    this.done = done || false;
    this.priority = priority;
    Object.defineProperty(this, 'id', {
      value: id != undefined? id : getNewId(),
      writable: false,
      enumerable: true,
    })
  }
}