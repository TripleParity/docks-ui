import {Port} from './port.model';

export interface Endpoint {
    Spec: {
        Mode: string;
        Ports: Port[];
    };
    Ports: Port[];
    VirtualIPs: {
        NetworkID: string;
        Addr: string;
    }[];
}
