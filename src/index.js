import './modules/DOMManipulator'
import pubsub from './modules/pubsub'

const projects = [];

pubsub.subscribe('project added', project => {
  projects.push(project)
  console.log(projects)
})
