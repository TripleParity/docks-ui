export enum DockerEventTypes {
  VOLUME = 'volume',
  NETWORK = 'network',
  SERVICE = 'service',
  NODE = 'node',
  IMAGE = 'image',
  DAEMON = 'daemon', // TODO(CDuPlooy): Check if this is the correct type.
  SECRET = 'secret',
  CONFIG = 'config',
}

export interface Webhook {
  name: string;
  url: string;
  types: DockerEventTypes[];
}
