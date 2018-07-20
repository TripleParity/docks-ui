export interface CreateVolume {
  Name: string;
  Driver: string;
  DriverOpts: JSON;
  Labels: JSON;
}
