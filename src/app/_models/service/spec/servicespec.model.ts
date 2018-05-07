import {TaskTemplate} from './tasktemplate.model';
import {Mode} from './mode.model';

export interface ServiceSpec {
    Name: string;
    TaskTemplate: TaskTemplate;
    Mode: Mode;
}
