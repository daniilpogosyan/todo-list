// Set of function that create base element of the website
// such as header, footer etc


import './base.css'


export function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header');

  const heading = document.createElement('h1');
  heading.textContent = 'To-do List';
  heading.classList.add('heading');
  header.appendChild(heading);
  
  return header;
}


export function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const copyright = document.createElement('p');
  copyright.textContent = 'Created by Thor';
  copyright.classList.add('copyright')

  footer.appendChild(copyright);
  
  return footer;
}

export function createContent() {
  const content = document.createElement('main');
  content.classList.add('content');
  content.id = 'content';
  
  return content;
}