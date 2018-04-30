import {Deserialize, deserializeAs, Serialize, serializeAs} from 'cerialize';

export class EndpointSpec {
    @deserializeAs('Mode') @serializeAs('Mode') public mode: string;
    @deserializeAs('Ports') @serializeAs('Ports') public ports: string[]; //Returns an object array -> don't know how to approach this


    constructor() {}
    static parse(data: JSON): EndpointSpec {
        let spec: EndpointSpec = new EndpointSpec();
        spec = Deserialize(data, EndpointSpec);
        return spec;
    }

    public toJSON(): JSON {
        return Serialize(this);
    }
}
