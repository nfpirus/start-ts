import { Project } from '../lib/Project';
import { IControl } from '../lib/IControl';

const project: Project = new Project();
const control: IControl = project.createText();
control.text = 'Demo running';
control.appendTo(document.body);
