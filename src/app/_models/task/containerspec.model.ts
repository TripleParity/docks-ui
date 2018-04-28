import {Deserialize, deserializeAs, Serialize, serializeAs} from 'cerialize';

export class ContainerSpec {
    @deserializeAs('Image') @serializeAs('Image') public image: string;


    constructor() {}
    static parse(data: JSON): ContainerSpec {
        let cs: ContainerSpec = new ContainerSpec();
        cs = Deserialize(data, ContainerSpec);
        return cs;
    }

    public toJSON(): JSON {
        return Serialize(this);
    }
}
