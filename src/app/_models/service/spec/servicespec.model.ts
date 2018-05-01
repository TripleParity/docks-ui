import {Deserialize, deserializeAs, Serialize, serializeAs} from 'cerialize';
import {TaskTemplate} from './tasktemplate.model';
import {Mode} from './mode.model';

export class ServiceSpec {
    @deserializeAs('Name') @serializeAs('Name') public name: string;
    @deserializeAs('TaskTemplate') @serializeAs('TaskTemplate') public taskTemplate: TaskTemplate;
    @deserializeAs('Mode') @serializeAs('Mode') public mode: Mode;
    // TODO: (AHelberg) Create updateConfig model.
    // TODO: (AHelberg) Create EndpointSpec model.

    constructor() {}
    static parse(data: JSON): ServiceSpec {
        let service: ServiceSpec = new ServiceSpec();
        service = Deserialize(data, ServiceSpec);
        service.taskTemplate = TaskTemplate.parse(data['TaskTemplate']);
        service.mode = Mode.parse(data['Mode']);
        return service;
    }

    public toJSON(): JSON {
        return Serialize(this);
    }
}
