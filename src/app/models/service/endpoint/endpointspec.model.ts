import { Port } from '../port/port.model';

/**
 * EndpointSpec interface for Services.
 *
 * @interface
 */
export interface EndpointSpec {
    Mode: string;
    Ports: Port[];
}
