import {Deserialize, deserializeAs, Serialize, serializeAs} from 'cerialize';
import {Replicas} from './replicas.model';
export class Mode {
    @deserializeAs('Replicated') @serializeAs('Replicated') public replicated: Replicas;

    constructor() {}
    static parse(data: JSON): Mode {
        let mode: Mode = new Mode();
        mode = Deserialize(data, Mode);
        mode.replicated = Replicas.parse(data['Replicated']);
        return mode;
    }

    public toJSON(): JSON {
        return Serialize(this);
    }
}
