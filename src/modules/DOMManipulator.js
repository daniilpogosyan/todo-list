import '../base/pageLoader'
import pubsub from './pubsub'
import Project from './Project'
import Todo from "./Todo";
import { WrapInLi } from './utility';
import '../stylesheets/sidebar.css';
import '../stylesheets/content.css';

// object that handle content section of DOM:
// displaying project,
const content = (() => {
  const content = document.getElementById('content');

  function _createDOMTodo(todo) {
    const title = document.createElement('input');
    title.classList.add('todo-item__title')
    title.value = todo.title;
  
    const check = document.createElement('input');
    check.classList.add('todo-item__check')
    check.type = 'checkbox';
    check.checked = todo.done;
  
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('todo-item__delete-btn')
    deleteBtn.textContent = 'x';
  
    deleteBtn.addEventListener('click', 
      () => pubsub.publish('todo removed', todo.id));
  
    const DOMTodo = document.createElement('li');
    DOMTodo.classList.add('todo-list__todo-item');
    DOMTodo.append(check, title, deleteBtn);
    DOMTodo.dataset.id = todo.id;

    title.addEventListener('change', () => {
      pubsub.publish('todo-name changed', todo.id, title.value);
    })

    check.addEventListener('change', () => {
      pubsub.publish('todo-check-status changed', todo.id, check.checked);
    })
  
    return DOMTodo
  }

  function _createDOMProject(project) {
    const DOMProject = document.createElement('div');
    DOMProject.classList.add('project-contents')
  
    const newTodoInput = document.createElement('input');
    newTodoInput.classList.add('todo-adder__new-project-input');
    newTodoInput.placeholder = "what are you going to do?"
    newTodoInput.addEventListener('keypress', (e) => {
      if (e.key == 'Enter') {
        newTodoAddBtn.click();
      }
    })
    const newTodoAddBtn = document.createElement('button')
    newTodoAddBtn.textContent = 'Add';
    newTodoAddBtn.classList.add('todo-adder__new-project-btn')
    newTodoAddBtn.addEventListener('click', () => {
      if (!newTodoInput.value)
        return
  
      const newTodoTitle = newTodoInput.value;
      const newTodo = new Todo(newTodoTitle);
      pubsub.publish('todo added', project.id, newTodo);
  
      newTodoInput.value = "";
    })
  
  
    const title = document.createElement("input");
    title.value = project.title;
    title.classList.add('project-header__title');
    title.addEventListener('change', () => {
      pubsub.publish('project-name changed', project.id, title.value)
    })
    
    const description = document.createElement('p');
    description.textContent = project.description;
    description.classList.add('project-header__description')
    
    const todoList = (function() {
      const todoList = document.createElement('ul');
      todoList.classList.add('project-contents__todo-list');
  
      project.todos.forEach(todo => {
        const DOMTodo =  _createDOMTodo(todo);
        todoList.appendChild(DOMTodo);
      });
  
      return todoList
    })();
  
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('project-contents__delete-project-btn')
    deleteBtn.textContent = 'Delete Project';
  
    deleteBtn.addEventListener('click', 
      () => pubsub.publish('project removed', project.id));

    const todoAdder = document.createElement('div');
    todoAdder.append(newTodoInput, newTodoAddBtn);
    todoAdder.classList.add('project-contents__todo-adder')
    
    const header = document.createElement('div');
    header.append(title, description);
    header.classList.add('project-contents__project-header')

    DOMProject.append(
      header,
      todoAdder,
      todoList,
      deleteBtn,
      );
  
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

    function createNewProjectBtn() {
      console.log('new proj')
      const newProjectBtn = document.createElement('button');
      newProjectBtn.classList.add('new-project-btn')
      newProjectBtn.textContent = "New Project";
      newProjectBtn.addEventListener('click', () => {
        pubsub.publish('project added', new Project("TEST PROJECT",'You should finish this project by tomorrow' ))
      })
      return newProjectBtn
    }

    function createDOMProjectList(){
      const wrapperDOMProjectList = document.createElement('div')
      const DOMProjectList = document.createElement('ul');
      DOMProjectList.classList.add('project-list');
  
      
      const addProject = (project) => {
        const projectName  = document.createElement('span');
        projectName.textContent = project.title;
        
        const wrapper = WrapInLi(projectName, {
          'data-id': project.id,
        });
        wrapper.classList.add('project-list__project');
        
        const highlightProject = () => {
          DOMProjectList.querySelectorAll('li').forEach((wrapper) => {
            wrapper.classList.remove('project-list__project--selected')
          })
          wrapper.classList.add('project-list__project--selected')
        }

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('project-list__delete-btn')
        deleteBtn.textContent = 'X';
        deleteBtn.addEventListener('click', 
        () => pubsub.publish('project removed', project.id));
        
        wrapper.append(deleteBtn)

        wrapper.addEventListener('click', (e) => {
          // prevent requesting project when clicking on delete button, 
          // which reside inside the wrapper
          if (e.target == deleteBtn)
            return
          
          highlightProject()
          

          pubsub.publish('project requested', project.id)
        })
        
        highlightProject()
        DOMProjectList.prepend(wrapper);
      }

      const removeProject = (id) => {
        const unwantedProject = DOMProjectList.querySelector(`[data-id="${id}"]`);
        if (unwantedProject)
          unwantedProject.remove();
      }
    
      pubsub.subscribe('project added', addProject);
      pubsub.subscribe('project removed', removeProject);
      pubsub.subscribe('project-name changed', (projectId, newName) => {
        console.log('renamed')
        const targetProject = DOMProjectList
        .querySelector(`[data-id="${projectId}"] span`);
        targetProject.textContent = newName;
      })

      return DOMProjectList
    }

    function viewProjectManager() {
      const projectManager = document.createElement('div')
      projectManager.classList.add('project-manager');
      projectManager.append(
        createNewProjectBtn(),
        createDOMProjectList(),
        );
      sidebar.append(projectManager);
    }
    
    viewProjectManager();


})();
