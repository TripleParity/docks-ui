import {ServiceSpec} from './spec/servicespec.model';
import {Endpoint} from './endpoints/endpoint.model';

export interface Service {
    ID: string;
    CreatedAt: string;
    UpdatedAt: string;
    Spec: ServiceSpec;
    Endpoint: Endpoint;
}
