import {Deserialize, deserializeAs, Serialize, serializeAs} from 'cerialize';
import {ContainerSpec} from './containerspec.model';

export class TaskTemplate {
    @deserializeAs('ContainerSpec') @serializeAs('ContainerSpec') public containerSpec: ContainerSpec;
    // TODO: (AHelberg) Create Resources model.
    // TODO: (AHelberg) Create RestartPolicy model.
    // TODO: (AHelberg) Create placement model.

    constructor() {}
    static parse(data: JSON): TaskTemplate {
        let taskTemplate: TaskTemplate = new TaskTemplate();
        taskTemplate = Deserialize(data, TaskTemplate);
        taskTemplate.containerSpec = ContainerSpec.parse(data);
        return taskTemplate;
    }

    public toJSON(): JSON {
        return Serialize(this);
    }
}
