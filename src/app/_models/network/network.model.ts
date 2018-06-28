import { Ipam } from './ipam/ipam.model';

/**
 * Interface for Network
 *
 * @interface
 */

export interface Network {
    Name: string;
    ID: string;
    Created: string;
    Scope: string;
    Driver: string;
    EnableIPv6: boolean;
    Internal: boolean;
    Attachable: boolean;
    Ingress: boolean;
    IPAM: Ipam;
    Options: JSON;
}
