import {Deserialize} from 'cerialize';

export class Container {
    @deserializeAs('Id') @serializeAs('Id') private id: string;
    @deserializeAs('Label') @serializeAs('Label') private labels: string[];

    constructor(data: JSON){
        Deserialize(data, this);
    }

    public toJSON(): JSON{
        return Serialize(this);
    }
}
