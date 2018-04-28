import {autoserialize, autoserializeAs, Deserialize, deserializeAs, Serialize, serializeAs} from 'cerialize';
import {TaskSpec} from './taskspec.model';

export class Task {
    @deserializeAs('ID') @serializeAs('ID') public id: string;
    @deserializeAs('CreatedAt') @serializeAs('CreatedAt') public createdAt: Date;
    @deserializeAs('UpdatedAt') @serializeAs('UpdatedAt') public updatedAt: Date;
    @deserializeAs('TaskSpec') @serializeAs('TaskSpec') public spec: TaskSpec;
    @deserializeAs('ServiceID') @serializeAs('ServiceID') public serviceID: string;
    @deserializeAs('Slot') @serializeAs('Slot') public slot: number;
    @deserializeAs('NodeID') @serializeAs('NodeID') public nodeID: string;
    // TODO(CDuPlooy): Add status model.
    @deserializeAs('DesiredState') @serializeAs('DesiredState') public desiredState: string;
    // TODO(CDuPlooy): Add network attachments model.

    constructor() {}
    static parse(data: JSON): Task {
        let task: Task = new Task();
        task = Deserialize(data, Task);
        task.spec = TaskSpec.parse(data['ContainerSpec']);
        return task;
    }

    // TODO(CDuPlooy): Implemenet nested serialisation.

    public toJSON(): JSON {
        return Serialize(this);
    }
}
