import {Deserialize, deserializeAs, Serialize, serializeAs} from 'cerialize';

export class ContainerStatus {
    @deserializeAs('ContainerID') @serializeAs('ContainerID') public containerID: string;
    @deserializeAs('PID') @serializeAs('PID') public state: number;


    constructor() {}
    static parse(data: JSON): ContainerStatus {
        let stat: ContainerStatus = new ContainerStatus();
        stat = Deserialize(data, ContainerStatus);
        return stat;
    }

    public toJSON(): JSON {
        return Serialize(this);
    }
}
