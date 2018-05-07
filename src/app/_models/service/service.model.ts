import {Version} from './version.model';
import {ServiceSpec} from './spec.model';

export interface Service {
    ID: string;
    Version: Version;
    CreatedAt: string;
    UpdatedAt: string;
    Spec: ServiceSpec;
    Endpoint: JSON;
}
