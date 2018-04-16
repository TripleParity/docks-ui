import {Deserialize, deserializeAs, Serialize, serializeAs} from 'cerialize';

export class Container {
    @deserializeAs('Id') @serializeAs('Id') public id: string;
    @deserializeAs('Names') @serializeAs('Names') public names: string[];
    @deserializeAs('Image') @serializeAs('Image') public image: string;
    @deserializeAs('ImageID') @serializeAs('ImageID') public imageID: string;
    @deserializeAs('State') @serializeAs('State') public state: string;
    @deserializeAs('Status') @serializeAs('Status') public status: string;
    // TODO: (CDuPlooy) Add Ports Model.
    // TODO: (CDuPlooy) Add Labels Model.
    @deserializeAs('SizeRw') @serializeAs('SizeRw') public sizeRW: number;
    @deserializeAs('SizeRootFs') @serializeAs('SizeRootFs') public sizeRootFS: number;
    // TODO: (CDuPlooy) Add HostConfig Model.
    // TODO: (CDuPlooy) Add NetworkSettings Model.
    // TODO: (CDuPlooy) Add Mounts Model.

    constructor() {}
    static parse(data: JSON): Container {
        let container: Container = new Container();
        container = Deserialize(data, Container);
        return container;
    }
    public toJSON(): JSON {
        return Serialize(this);
    }


}
