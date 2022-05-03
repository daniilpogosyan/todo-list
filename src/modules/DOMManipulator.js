import * as base from "../base/base";
import pubsub from './pubsub'
import Project from './Project'
import Todo from "./Todo";


function todoWrap(todo) {
  const todoWrapper = document.createElement('li');
  todoWrapper.appendChild(createDOMTodo(todo));
  todoWrapper.dataset.id = todo.id;

  return todoWrapper
}


// Creating base structure of the page
const header = base.createHeader();
const content = base.createContent();
const footer = base.createFooter();
document.body.append(header)
document.body.append(content)
document.body.append(footer)


const addProjectBtn = document.createElement('button');
addProjectBtn.textContent = "New Project";
content.appendChild(addProjectBtn);
addProjectBtn.addEventListener('click', () => {
  pubsub.publish('project added', new Project("TEST PROJECT",'You should finish this project by tomorrow' ))
})


function viewProject(project) {
  const DOMProject = document.createElement('div');

  console.log(project)
  const newTodoInput = document.createElement('input');
  const newTodoAddBtn = document.createElement('button')
  newTodoAddBtn.textContent = 'Add';
  newTodoAddBtn.addEventListener('click', () => {
    if (!newTodoInput.value)
      return

    const newTodoTitle = newTodoInput.value;
    const newTodo = new Todo(newTodoTitle);
    pubsub.publish('todo added', project.id, newTodo);

    newTodoInput.value = "";
  })


  const title = document.createElement("h3");
  title.textContent = project.title;
  
  const description = document.createElement('p');
  description.textContent = project.description;
  
  const todoList = (function() {
    const todoList = document.createElement('ul');

    project.todos.forEach(todo => {
      const todoWrapper = todoWrap(todo);
      todoList.appendChild(todoWrapper);
    });

    return todoList
  })();

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';

  deleteBtn.addEventListener('click', 
    () => pubsub.publish('project removed', project.id));

  
  DOMProject.append(title, deleteBtn, newTodoInput, newTodoAddBtn, description, todoList);
  DOMProject.dataset.id = project.id;

  content.appendChild(DOMProject)
}

function createDOMTodo(todo) {
  const title = document.createElement('h4');
  title.textContent = todo.title;

  const check = document.createElement('input');
  check.type = 'checkbox';

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';

  deleteBtn.addEventListener('click', 
    () => pubsub.publish('todo removed', todo.id));

  const DOMTodo = document.createElement('div');
  DOMTodo.append(check, title, deleteBtn);
  DOMTodo.dataset.id = todo.id;

  return DOMTodo
}

pubsub.subscribe('project added', viewProject)

pubsub.subscribe('project removed', (id) => {
  document.querySelector(`[data-id="${id}"]`).remove();
})

pubsub.subscribe('todo added', (projectId, todo) => {
  const project = document.querySelector(`[data-id="${projectId}"] ul`);
  project.appendChild(todoWrap(todo))
})
pubsub.subscribe('todo removed', (id) => {
  document.querySelector(`[data-id="${id}"]`).remove();
})