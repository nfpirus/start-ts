import { IControl } from './IControl';
import { CustomControl } from './internal/CustomControl';

export class Project {
    public createText(): IControl {
        return new CustomControl();
    }
}