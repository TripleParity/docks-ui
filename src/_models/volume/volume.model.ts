import {Deserialize, deserializeAs, Serialize, serializeAs} from 'cerialize';

export class Volume {
    @deserializeAs('Name') @serializeAs('Name') public name: string;
    @deserializeAs('Driver') @serializeAs('Driver') public driver: string;
    @deserializeAs('Mountpoint') @serializeAs('Mountpoint') public mountPoint: string;
    // TODO: (CDuPlooy) Labels example?
    @deserializeAs('Scope') @serializeAs('Scope') public scope: string;

    constructor() {}
    static parse(data: JSON): Volume {
        let volume: Volume = new Volume();
        volume = Deserialize(data, Volume);
        return volume;
    }

    public toJSON(): JSON {
        return Serialize(this);
    }


}
