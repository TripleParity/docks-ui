import {Deserialize, deserializeAs, Serialize, serializeAs} from 'cerialize';
import {ServiceSpec} from './spec/servicespec.model';
import {Endpoint} from './endpoints/endpoint.model';

export class Service {
    @deserializeAs('Id') @serializeAs('Id') public id: string;
    // TODO: (CDuPlooy) Create version model.
    @deserializeAs('CreatedAt') @serializeAs('CreatedAt') public createdAt: string;
    @deserializeAs('UpdatedAt') @serializeAs('UpdatedAt') public updatedAt: string;
    @deserializeAs('Spec') @serializeAs('Spec') public spec: ServiceSpec;
    @deserializeAs('Endpoint') @serializeAs('Endpoint') public endpoint: Endpoint;

    constructor() {}
    static parse(data: JSON): Service {
        let service: Service = new Service();
        service = Deserialize(data, Service);
        service.spec = ServiceSpec.parse(data['Spec']);
        service.endpoint = Endpoint.parse(data['Endpoint']);
        return service;
    }

    public toJSON(): JSON {
        return Serialize(this);
    }


}
