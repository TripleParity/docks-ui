/**
 * Task interface
 *
 * @interface
 */
import {ContainerSpecModel} from "app/_models/task/spec/containerSpec.model";
import {ResourcesModel} from "app/_models/task/spec/resources.model";
import {RestartPolicyModel} from "app/_models/task/spec/restartPolicy.model";
import {ContainerStatusModel} from "app/_models/task/status/containerstatus.model";
import {NetworkAttachment} from "app/_models/task/networkAttachment/networkAttachment.model";

export interface Task {
    ID: string;
    Version: {
        Index: number;
    }
    CreatedAt: string;
    UpdatedAt: string;
    Spec: {
        ContainerSpec: ContainerSpecModel;
        Resources: ResourcesModel;
        RestartPolicy: RestartPolicyModel;
    }
    ServiceID: string;
    Slot: number;
    NodeID: string;
    Status: {
        Timestamp: string;
        State: string;
        Message: string;
        ContainerStatus: ContainerStatusModel;
    }
    DesiredState: string;
    NetworksAttachments: NetworkAttachment[];
}

