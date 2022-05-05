import * as base from './base'
import './base.css'

const header = base.createHeader();
const sidebar = base.createSideBar();
const content = base.createContent();
const footer = base.createFooter();

document.body.append(header);
document.body.append(sidebar);
document.body.append(content);
document.body.append(footer);
