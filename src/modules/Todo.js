import {getNewId} from './utility'

export default class Todo  {
  constructor(title, priority = 0) {
    this.title = title;
    this.done = false;
    this.priority = priority;
    Object.defineProperty(this, 'id', {
      value: getNewId(),
      writable: false,
    })
  }
}