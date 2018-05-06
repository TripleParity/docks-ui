import {Deserialize, deserializeAs, Serialize, serializeAs} from 'cerialize';
import {EndpointSpec} from './endpointspec.model';
import {Port} from './port.model';

export class Endpoint {
    @deserializeAs('Spec') @serializeAs('Spec') public spec: EndpointSpec;
    @deserializeAs('Ports') @serializeAs('Ports') public ports: Port[]; // Returns an object array -> don't know how to approach this

    // TODO: (AHelberg) Create Virtual IPs model.

    constructor() {}
    static parse(data: JSON): Endpoint {
        let endpoint: Endpoint = new Endpoint();
        endpoint = Deserialize(data, Endpoint);
        endpoint.spec = EndpointSpec.parse(data['Spec']);
        const _ports: JSON = data['Ports'];
        endpoint.ports = [];
        for (let i = 0; i < Object.keys(_ports).length; i++) {
            endpoint.ports.push(Port.parse(data['Ports'][i]));
        }
        return endpoint;
    }

    public toJSON(): JSON {
        return Serialize(this);
    }
}
