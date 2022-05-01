import * as base from "./base/base";


const header = base.createHeader();
const content = base.createContent();
const footer = base.createFooter();
document.body.append(header)
document.body.append(content)
document.body.append(footer)