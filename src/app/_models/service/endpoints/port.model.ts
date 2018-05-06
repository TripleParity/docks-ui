import {Deserialize, deserializeAs, Serialize, serializeAs} from 'cerialize';
import {EndpointSpec} from './endpointspec.model';

export class Port {
    @deserializeAs('Protocol') @serializeAs('Protocol') public protocol: string;
    @deserializeAs('TargetPort') @serializeAs('TargetPort') public targetPort: number;
    @deserializeAs('PublishedPort') @serializeAs('PublishedPort') public publishedPort: number;


    constructor() {}
    static parse(data: JSON): Port {
        let port: Port = new Port();
        port = Deserialize(data, Port);
        return port;
    }

    public toJSON(): JSON {
        return Serialize(this);
    }
}
