// This model will be using interfaces instead of classes as an experiment.
import { Ipam } from './ipam/ipam.model';

export interface Network {
    Name: string;
    Id: string;
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
