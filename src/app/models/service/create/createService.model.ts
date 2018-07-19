import { Image } from 'app/models/image/image.model';
import { Port } from 'app/models/service/port/port.model';

export interface CreateService {
    Name: string;
    ports: Port;
    image: Image;
  }
