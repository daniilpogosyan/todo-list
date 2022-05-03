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
