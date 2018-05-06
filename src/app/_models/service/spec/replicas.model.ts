import {Deserialize, deserializeAs, Serialize, serializeAs} from 'cerialize';
export class Replicas {
    @deserializeAs('Replicas') @serializeAs('Replicas') public replicas: number;


    constructor() {}
    static parse(data: JSON): Replicas {
        let rep: Replicas = new Replicas();
        rep = Deserialize(data, Replicas);
        return rep;
    }

    public toJSON(): JSON {
        return Serialize(this);
    }
}
