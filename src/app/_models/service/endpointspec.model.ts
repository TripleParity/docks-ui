import {Port} from 'app/_models/service/port.model';

export interface EndpointSpec {
    Mode: string;
    Ports: Port[];
}
