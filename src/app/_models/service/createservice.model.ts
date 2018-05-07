// TODO(CDuPlooy): All interfaces which are of type JSON still need to be modelled.

import {TaskTemplate} from './spec/tasktemplate.model';
import {Mode} from './spec/mode.model';
import {EndpointSpec} from './endpoints/endpointspec.model';

export interface CreateService {
    Name: string;
    Labels: JSON;
    TaskTemplate: TaskTemplate;
    Mode: Mode;
    UpdateConfig: JSON;
    RollbackConfig: JSON;
    Networks: object;
    EndpointSpec: EndpointSpec;
}
