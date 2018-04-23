import {Deserialize, deserializeAs, Serialize, serializeAs} from 'cerialize';

export class Service {
    @deserializeAs('Id') @serializeAs('Id') public id: string;
    // TODO: (CDuPlooy) Create version model.
    @deserializeAs('CreatedAt') @serializeAs('CreatedAt') public createdAt: string;
    @deserializeAs('UpdatedAt') @serializeAs('UpdatedAt') public updatedAt: string;
    // TODO: (CDuPlooy) Create spec model.
    // TODO: (CDuPlooy) Create resources model.
    // TODO: (CDuPlooy) Create restart policy model.
    // TODO: (CDuPlooy) Create placement model.
    // TODO: (CDuPlooy) Create mode model.
    // TODO: (CDuPlooy) Create update config model.
    // TODO: (CDuPlooy) Create endpoints spec model.
    // TODO: (CDuPlooy) Create endpoint model.
    // TODO: (CDuPlooy) Create VirtualIPs model.

    constructor() {}
    static parse(data: JSON): Service {
        let service: Service = new Service();
        service = Deserialize(data, Service);
        return service;
    }

    public toJSON(): JSON {
        return Serialize(this);
    }


}
