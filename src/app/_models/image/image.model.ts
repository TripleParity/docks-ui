import {Deserialize, deserializeAs, Serialize, serializeAs} from 'cerialize';

export class Image {
    @deserializeAs('Id') @serializeAs('Id') public id: string;
    @deserializeAs('Created') @serializeAs('Created') public created: string;
    @deserializeAs('Size') @serializeAs('Size') public size: number;
    @deserializeAs('VirtualSize') @serializeAs('VirtualSize') public virtualSize: number;
    // TODO: (CDuPlooy) Labels example?

    constructor() {}
    static parse(data: JSON): Image {
        let image: Image = new Image();
        image = Deserialize(data, Image);
        return image;
    }
    public toJSON(): JSON {
        return Serialize(this);
    }


}
