import { Port } from './port.model';

// Interface vs class?
// See https://stackoverflow.com/questions/47668057/angular-typescript-map-array-into-class
export class Container {
    id: string;
    names: string[];
    image: string;
    imageID: string;
    command: string;
    created: string;
    state: string;
    status: string;
    ports: Port[];

    constructor(id: string) {
        this.id = id;
    }

    static parse(data): Container {
        return new Container(
            data.id
        );
    }
}
