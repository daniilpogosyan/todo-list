import './modules/DOMManipulator'
import pubsub from './modules/pubsub'

const projects = [];

pubsub.subscribe('project added', project => {
  projects.push(project)
  console.log(projects)
})

pubsub.subscribe('project removed',(id) => {
  const removedIndex = projects.findIndex(project => {
    console.log(id, project.id)
    return project.id == id;
  })

  if (removedIndex >= 0) {
    projects.splice(removedIndex, 1)
  }
})

pubsub.subscribe('todo removed', (id) => {
  for (let project of projects) {
    if (project.removeTodo(id)) {
      console.log('deleted from project')
      break;
    }

  }
  console.log(projects)
})

pubsub.subscribe('todo added', (projectId, todo) => {
  const targetProject = projects.find(project => project.id == projectId);
  targetProject.addTodo(todo);
})
pubsub.subscribe('project requested', (projectId) => {
  pubsub.publish('project passed', projects.find(project => project.id == projectId))
})
