import '../base/pageLoader'
import pubsub from './pubsub'
import Project from './Project'
import Todo from "./Todo";
import { WrapInLi } from './utility';




// Creating base structure of the page
const content = document.getElementById('content');
const sidebar = (() => {
  const sidebar = document.querySelector('.project-list');

  const addProjectBtn = document.createElement('button');
  addProjectBtn.textContent = "New Project";
  sidebar.appendChild(addProjectBtn);
  addProjectBtn.addEventListener('click', () => {
    pubsub.publish('project added', new Project("TEST PROJECT",'You should finish this project by tomorrow' ))
  })

  const addProject = (project) => {
    const projectName  = document.createElement('p');
    projectName.textContent = project.title;
    projectName.addEventListener('click', () => {
      pubsub.publish('project requested', project.id)
    })

    const wrapper = WrapInLi(projectName, {
      'data-id': project.id,
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
  
    deleteBtn.addEventListener('click', 
      () => pubsub.publish('project removed', project.id));

    wrapper.append(deleteBtn)

    sidebar.append(wrapper);
  }

  pubsub.subscribe('project passed', viewProject)

  pubsub.subscribe('project added', addProject)
})();


function viewProject(project) {
  content.textContent = "";

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
      const wrappedTodo = WrapInLi(createDOMTodo(todo), {
        'data-id':`${todo.id}`,
      });
      todoList.appendChild(wrappedTodo);
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

// it should queryselectorAll because project render itself both in content
// and sidebar
pubsub.subscribe('project removed', (id) => {
  const idOwners = document.querySelectorAll(`[data-id="${id}"]`);
  idOwners.forEach(idOwner =>idOwner.remove())
})

pubsub.subscribe('todo added', (projectId, todo) => {
  const project = document.querySelector(`[data-id="${projectId}"] ul`);
  const wrappedTodo = WrapInLi(createDOMTodo(todo), {
    'data-id': todo.id,
  });
  project.appendChild(wrappedTodo)
})

pubsub.subscribe('todo removed', (id) => {
  document.querySelector(`[data-id="${id}"]`).remove();
})