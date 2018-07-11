<<<<<<< HEAD
// This model will be using interfaces instead of classes as an experiment.
import { Ipam } from 'app/_models/network/ipam/ipam.model';
=======
import { Ipam } from './ipam/ipam.model';
>>>>>>> develop

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
