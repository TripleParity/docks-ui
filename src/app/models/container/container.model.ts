/**
 * Interface for containers
 *
 * @interface
 */
import { HostConfigModel } from './hostConfig/hostConfig.model';
import { Mount } from './mount/mount.model';
import { NetworkSettingsModel } from './networkSettings/networkSettings.model';

export interface Container {
  ID: string;
  Names: string[];
  Image: string;
  ImageID: string;
  State: string;
  Status: string;
  Ports: JSON[]; // TODO: (CDuPlooy) Verify that this is correct.
  Labels: JSON;
  SizeRw: number;
  SizeRootFS: number;
  HostConfig: HostConfigModel;
  NetworkSettings: NetworkSettingsModel;
  Mounts: Mount[]; // TODO: (CDuPlooy) Ensure this is serialised correctly from the json.

  // TODO: (CDuPlooy) Inspect relationship between container ID and endPointID in services for example.
}
