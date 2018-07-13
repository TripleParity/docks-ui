import {Version} from 'app/_models/service/version.model';
import {ServiceSpec} from 'app/_models/service/spec.model';

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
