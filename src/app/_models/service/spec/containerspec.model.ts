import {Deserialize, deserializeAs, Serialize, serializeAs} from 'cerialize';

export class ContainerSpec {
    @deserializeAs('ContainerID') @serializeAs('ContainerID') public containerID: string;
    @deserializeAs('PID') @serializeAs('PID') public state: number;
    @deserializeAs('Image') @serializeAs('Image') public image: number;


    constructor() {}
    static parse(data: JSON): ContainerSpec {
        let spec: ContainerSpec = new ContainerSpec();
        spec = Deserialize(data, ContainerSpec);
        return spec;
    }

    public toJSON(): JSON {
        return Serialize(this);
    }
}
