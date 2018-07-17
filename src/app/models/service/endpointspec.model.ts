import { Port } from 'app/_models/service/port.model';

/**
 * EndpointSpec interface for Services.
 *
 * @interface
 */
export interface EndpointSpec {
  Mode: string;
  Ports: Port[];
}
