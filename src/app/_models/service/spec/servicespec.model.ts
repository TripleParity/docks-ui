import {Deserialize, deserializeAs, Serialize, serializeAs} from 'cerialize';
import {TaskTemplate} from "./tasktemplate.model";

export class ServiceSpec {
    @deserializeAs('Name') @serializeAs('Name') public name: string;
    @deserializeAs('TaskTemplate') @serializeAs('TaskTemplate') public taskTemplate: TaskTemplate;
    // TODO: (AHelberg) Create mode model.
    // TODO: (AHelberg) Create updateConfig model.
    // TODO: (AHelberg) Create EndpointSpec model.

    constructor() {}
    static parse(data: JSON): ServiceSpec {
        let service: ServiceSpec = new ServiceSpec();
        service = Deserialize(data, ServiceSpec);
        service.taskTemplate = TaskTemplate.parse(data);
        return service;
    }

    public toJSON(): JSON {
        return Serialize(this);
    }
}
