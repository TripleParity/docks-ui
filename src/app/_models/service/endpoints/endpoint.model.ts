import {Deserialize, deserializeAs, Serialize, serializeAs} from 'cerialize';
import {EndpointSpec} from "./endpointspec.model";

export class Endpoint {
    @deserializeAs('Spec') @serializeAs('Spec') public spec: EndpointSpec;
    // TODO: (AHelberg) Create ports model.
    // TODO: (AHelberg) Create Virtual IPs model.

    constructor() {}
    static parse(data: JSON): Endpoint {
        let endpoint: Endpoint = new Endpoint();
        endpoint = Deserialize(data, Endpoint);
        endpoint.spec = EndpointSpec.parse(data);
        return endpoint;
    }

    public toJSON(): JSON {
        return Serialize(this);
    }
}
