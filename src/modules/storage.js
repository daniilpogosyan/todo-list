import Project from "./Project";
import Todo from "./Todo";
import pubsub from './pubsub';

const storageManager = (() => {
  function _storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
  }

  let _storageType = "sessionStorage";
  function _getStorage() {
    if (_storageAvailable(_storageType))
      return window[_storageType];
  }

  function _getProjectAsJSON(projectId) {
    return _getStorage()[projectId];
  }

  function store(project) {
    const storage = _getStorage();
    storage[project.id] = JSON.stringify(project);
  }

  function remove(projectId) {
    const storage = _getStorage();
    storage.removeItem(projectId);
  }

  function revive(projectId) {
    const projectJSON = _getProjectAsJSON(projectId);
    if (!projectJSON) {
      console.log(`project by id = ${projectId} cannot be accessed`);
      return
    }

    console.log('projectJSON', projectJSON)
    const projectData = JSON.parse(projectJSON);

    const project = new Project(
      projectData.title,
      projectData.description,
      projectId,
    );
    
    projectData.todos.forEach(todoData => {
      console.log("todo is restored")
      const todo = new Todo(
        todoData.title,
        todoData.priority,
        todoData.done,
        todoData.id,
        new Date(todoData.dueTime),
        );
      project.addTodo(todo);
    })

    return project
  }

  return {store, remove, revive}
})();


pubsub.subscribe('project added', (project) => {
  storageManager.store(project);
})


pubsub.subscribe('project removed',(projectId) => {
  storageManager.remove(projectId);
})


pubsub.subscribe('todo removed', (projectId, todoId) => {
  const targetProject = storageManager.revive(projectId);
  targetProject.removeTodo(todoId);
  storageManager.store(targetProject);
})


pubsub.subscribe('todo added', (projectId, todo) => {
  console.log(todo)
  const targetProject = storageManager.revive(projectId);
  targetProject.addTodo(todo);
  storageManager.store(targetProject);
})


pubsub.subscribe('project requested', (projectId) => {
  pubsub.publish('project passed', storageManager.revive(projectId))
})


pubsub.subscribe('project-description changed', (projectId, newDescription) => {
  const targetProject = storageManager.revive(projectId);
  targetProject.description = newDescription;
  storageManager.store(targetProject);
})


pubsub.subscribe('project-name changed', (projectId, newName) => {
  const targetProject = storageManager.revive(projectId);
  targetProject.title = newName;
  storageManager.store(targetProject);
})


pubsub.subscribe('todo-name changed', (projectId, todoId, newName) => {
  const targetProject = storageManager.revive(projectId);
  const targetTodo = targetProject.todos.find(todo => todo.id == todoId);
  targetTodo.title = newName;
  storageManager.store(targetProject);
})


pubsub.subscribe('todo-check-status changed', (projectId, todoId, isChecked) => {
  const targetProject = storageManager.revive(projectId);
  const targetTodo = targetProject.todos.find(todo => todo.id == todoId);
  targetTodo.done = isChecked;
  storageManager.store(targetProject);
})


pubsub.subscribe('todo-due-time changed', (projectId, todoId, dueTime) => {
  const targetProject = storageManager.revive(projectId);
  const targetTodo = targetProject.todos.find(todo => todo.id == todoId);
  targetTodo.dueTime = dueTime;
  storageManager.store(targetProject);
})