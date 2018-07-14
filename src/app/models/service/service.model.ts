import { Version } from './version/version.model';
import { ServiceSpec } from './spec/spec.model';

/**
 * Service interface.
 *
 * @interface
 */
export interface Service {
    ID: string;
    Version: Version;
    CreatedAt: string;
    UpdatedAt: string;
    Spec: ServiceSpec;
    Endpoint: JSON;
}
