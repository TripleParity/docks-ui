export interface Volume {
  CreatedAt?: string;
  Name: string;
  Driver: string;
  Mountpoint?: string;
  Scope?: string;
  Labels?: {[name: string]: string};
  Options?: JSON;
  DriverOpts?: {[name: string]: string};
}
