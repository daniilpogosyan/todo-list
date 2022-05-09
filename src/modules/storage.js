import Project from "./Project";
import Todo from "./Todo";

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