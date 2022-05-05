import '../base/pageLoader'
import pubsub from './pubsub'
import Project from './Project'
import Todo from "./Todo";
import { WrapInLi } from './utility';


// object that handle content section of DOM:
// displaying project,
const content = (() => {
  const content = document.getElementById('content');

  function _createDOMTodo(todo) {
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

  function _createDOMProject(project) {
    const DOMProject = document.createElement('div');
  
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
        const wrappedTodo = WrapInLi(_createDOMTodo(todo), {
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
      
    DOMProject.append(
      title,
      deleteBtn,
      newTodoInput,
      newTodoAddBtn,
      description,
      todoList);
  
    DOMProject.dataset.id = project.id;
  
    return DOMProject
  }
  
  function viewProject(project) {
    const DOMProject = _createDOMProject(project);
  
    content.appendChild(DOMProject);
  }

  function removeProject(id) {
    const unwantedProject = content.querySelector(`[data-id="${id}"]`);
    if (unwantedProject)
      unwantedProject.remove();
  }
  
  function clear() {
    content.textContent = "";
  }
  
  pubsub.subscribe('project added', (project) => {
    clear();
    viewProject(project);
  });
  
  pubsub.subscribe('project passed', (project) => {
    clear();
    viewProject(project);
  });

  pubsub.subscribe('todo added', (projectId, todo) => {
    const project = document.querySelector(`[data-id="${projectId}"] ul`);
    const wrappedTodo = WrapInLi(_createDOMTodo(todo), {
      'data-id': todo.id,
    });
    project.appendChild(wrappedTodo);
  });

  pubsub.subscribe('todo removed', (id) => {
    document.querySelector(`[data-id="${id}"]`).remove();
  })

  pubsub.subscribe('project removed', removeProject);
  
  return { viewProject, clear }
})();


// object that handle sidebar section of DOM:
// display project list items,
// select desired project by click,
const sidebar = (() => {
  const sidebar = document.getElementById('sidebar');

    function createDOMProjectList(){
      const DOMProjectList = document.createElement('ul');
  
      const addProjectBtn = document.createElement('button');
      addProjectBtn.textContent = "New Project";
      DOMProjectList.appendChild(addProjectBtn);
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
    
        DOMProjectList.append(wrapper);
      }

      const removeProject = (id) => {
        const unwantedProject = DOMProjectList.querySelector(`[data-id="${id}"]`);
        if (unwantedProject)
          unwantedProject.remove();
      }
    
      pubsub.subscribe('project added', addProject);
      pubsub.subscribe('project removed', removeProject);
    
      return DOMProjectList
    }

    function viewProjectList() {
      console.log(sidebar)
      sidebar.append(createDOMProjectList());
    }

    viewProjectList();


})();
