import * as base from "../base/base";
import pubsub from './pubsub'
import Project from './Project'


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
  console.log(project)
  const title = document.createElement("h3");
  title.textContent = project.title;
  
  const description = document.createElement('p');
  description.textContent = project.description;

  const DOMProject = document.createElement('div');
  DOMProject.append(title, description);
  DOMProject.dataset.id = project.id;

  content.appendChild(DOMProject)
}


pubsub.subscribe('project added', viewProject)