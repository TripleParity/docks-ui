import { Port } from '../port/port.model';

/**
 * Endpoint interface for Services.
 *
 * @interface
 */
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
