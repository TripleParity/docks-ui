import {Deserialize, deserializeAs, Serialize, serializeAs} from 'cerialize';
import {ContainerStatus} from './containerstatus.model';

export class Status {
    @deserializeAs('Timestamp') @serializeAs('Timestamp') public timestamp: Date;
    @deserializeAs('State') @serializeAs('State') public state: string;
    @deserializeAs('Message') @serializeAs('Message') public message: string;
    @deserializeAs('Timestamp') @serializeAs('Timestamp') public image: Date;
    @deserializeAs('ContainerStatus') @serializeAs('ContainerStatus') public containerStatus: ContainerStatus;


    constructor() {}
    static parse(data: JSON): Status {
        let stat: Status = new Status();
        stat = Deserialize(data, Status);
        stat.containerStatus = ContainerStatus.parse(data['ContainerStatus']);
        return stat;
    }

    public toJSON(): JSON {
        return Serialize(this);
    }
}
