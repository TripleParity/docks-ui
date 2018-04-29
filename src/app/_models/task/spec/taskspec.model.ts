import {Deserialize, deserializeAs, Serialize, serializeAs} from 'cerialize';
import {ContainerSpec} from './containerspec.model';

export class TaskSpec {
    @deserializeAs('ContainerSpec') @serializeAs('ContainerSpec') public containerSpec: ContainerSpec;

    constructor() {}
    static parse(data: JSON): TaskSpec {
        let task: TaskSpec = new TaskSpec();
        task = Deserialize(data, TaskSpec);
        task.containerSpec = ContainerSpec.parse(data);
        return task;
    }

    public toJSON(): JSON {
        return Serialize(this);
    }
}
