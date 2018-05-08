import {Port} from './port.model';

export interface EndpointSpec {
    Mode: string;
    Ports: Port[];
}
