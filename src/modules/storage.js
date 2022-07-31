import Project from "./Project";
import Todo from "./Todo";
import pubsub from './pubsub';
import { getFirebaseConfig } from './firebaseConfig';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  deleteDoc,
  getDoc,
  getDocs,
} from 'firebase/firestore';

const app = initializeApp(getFirebaseConfig());

const db = getFirestore();
const projectCollection = collection(db, 'projects');
const storageManager = (() => {

  function store(project) {
    const projectRef = doc(projectCollection, `${project.id}`)
    setDoc(projectRef, JSON.parse(JSON.stringify(project)))
      .then(() => console.log('project is saved in firestore'))
      .catch(err => console.log(err.message));
  }

  function remove(projectId) {
    const projectRef = doc(projectCollection, `${projectId}`);
    deleteDoc(projectRef)
      .then(() => console.log('project is removed from firestore'))
      .catch(err => console.log(err.message));
  }

  async function revive(projectId) {
    const docRef = doc(db, 'projects', `${projectId}`);
    const docSnapshot = await getDoc(docRef);
    const projectData = docSnapshot.data();
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


pubsub.subscribe('project added', async (project) => {
  storageManager.store(project);
})


pubsub.subscribe('project removed', async (projectId) => {
  storageManager.remove(projectId);
})


pubsub.subscribe('todo removed', async (projectId, todoId) => {
  const targetProject = await storageManager.revive(projectId);
  targetProject.removeTodo(todoId);
  storageManager.store(targetProject);
})


pubsub.subscribe('todo added', async (projectId, todo) => {
  const targetProject = await storageManager.revive(projectId);
  targetProject.addTodo(todo);
  storageManager.store(targetProject);
})


pubsub.subscribe('project requested', async (projectId) => {
  pubsub.publish('project passed', await storageManager.revive(projectId))
})


pubsub.subscribe('project-description changed', async (projectId, newDescription) => {
  const targetProject = await storageManager.revive(projectId);
  targetProject.description = newDescription;
  storageManager.store(targetProject);
})


pubsub.subscribe('project-name changed', async (projectId, newName) => {
  const targetProject = await storageManager.revive(projectId);
  targetProject.title = newName;
  storageManager.store(targetProject);
})


pubsub.subscribe('todo-name changed', async (projectId, todoId, newName) => {
  const targetProject = await storageManager.revive(projectId);
  const targetTodo = targetProject.todos.find(todo => todo.id == todoId);
  targetTodo.title = newName;
  storageManager.store(targetProject);
})


pubsub.subscribe('todo-check-status changed', async (projectId, todoId, isChecked) => {
  const targetProject = await storageManager.revive(projectId);
  const targetTodo = targetProject.todos.find(todo => todo.id == todoId);
  targetTodo.done = isChecked;
  storageManager.store(targetProject);
})


pubsub.subscribe('todo-due-time changed', async (projectId, todoId, dueTime) => {
  const targetProject = await storageManager.revive(projectId);
  const targetTodo = targetProject.todos.find(todo => todo.id == todoId);
  targetTodo.dueTime = dueTime;
  storageManager.store(targetProject);
})


window.addEventListener('DOMContentLoaded', async () => {  
  const projects = await getDocs(projectCollection);
  projects.forEach(project => {
    pubsub.publish('project restored', {...project.data(), id: project.id});
  })
})