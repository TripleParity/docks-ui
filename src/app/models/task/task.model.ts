/**
 * Task interface
 *
 * @interface
 */
import { ContainerSpecModel } from './spec/containerSpec.model';
import { ResourcesModel } from './spec/resources.model';
import { RestartPolicyModel } from './spec/restartPolicy.model';
import { ContainerStatusModel } from './status/containerstatus.model';
import { NetworkAttachment } from './networkAttachment/networkAttachment.model';

export interface Task {
  ID: string;
  Version: {
    Index: number;
  };
  CreatedAt: string;
  UpdatedAt: string;
  Spec: {
    ContainerSpec: ContainerSpecModel;
    Resources: ResourcesModel;
    RestartPolicy: RestartPolicyModel;
  };
  ServiceID: string;
  Slot: number;
  NodeID: string;
  Status: {
    Timestamp: string;
    State: string;
    Message: string;
    ContainerStatus: ContainerStatusModel;
  };
  DesiredState: string;
  NetworksAttachments: NetworkAttachment[];
}
