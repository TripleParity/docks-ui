import {EndpointSpec} from './endpointspec.model';
import {Port} from './port.model';

export interface Endpoint {
    Spec: EndpointSpec;
    Ports: Port[];
}
