import {Deserialize, deserializeAs, Serialize, serializeAs} from 'cerialize';

export class Network {
    @deserializeAs('Id') @serializeAs('Id') public id: string;
    @deserializeAs('Name') @serializeAs('Name') public name: string;
    @deserializeAs('Driver') @serializeAs('Driver') public driver: string;
    @deserializeAs('Scope') @serializeAs('Scope') public scope: string;
    @deserializeAs('Internal') @serializeAs('Internal') public internal: boolean;
    @deserializeAs('EnableIPv6') @serializeAs('EnableIPv6') public enableIPv6: string;
    // TODO: (CDuPlooy) Create options model.


    constructor() {}
    static parse(data: JSON): Network {
        let network: Network = new Network();
        network = Deserialize(data, Network);
        return network;
    }

    public toJSON(): JSON {
        return Serialize(this);
    }


}
