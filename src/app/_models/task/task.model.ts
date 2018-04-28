import {Deserialize, deserializeAs, Serialize, serializeAs} from 'cerialize';

export class Task {
    @deserializeAs('ID') @serializeAs('ID') public id: string;
    @deserializeAs('CreatedAt') @serializeAs('CreatedAt') public createdAt: string;
    @deserializeAs('UpdatedAt') @serializeAs('UpdatedAt') public updatedAt: string;
    // TODO(CDuPlooy): Add spec model.
    // TODO(CDuPlooy / FJMentz): Add image member. (Task->Spec->ContainerSpec->Image)
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
        return task;
    }

    public toJSON(): JSON {
        return Serialize(this);
    }
}
