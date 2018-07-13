import {TaskTemplate} from 'app/_models/service/tasktemplate.model';
import {Mode} from 'app/_models/service/mode.model';
import {Config} from 'app/_models/service/config.model';
import {EndpointSpec} from 'app/_models/service/endpointspec.model';

/**
 * Spec interface for Services.
 *
 * @interface
 */
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
