import {TaskTemplate} from './tasktemplate.model';
import {Mode} from './mode.model';
import {Config} from './config.model';
import {EndpointSpec} from './endpointspec.model';

export interface ServiceSpec {
    Name: string;
    Labels: JSON[];
    TaskTemplate: TaskTemplate;
    Mode: Mode;
    UpdateConfig: Config;
    RollbackConfig: Config;
    Networks: JSON[];
    EndpointSpec: EndpointSpec;
}
