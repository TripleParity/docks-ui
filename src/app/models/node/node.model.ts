export interface Node {
  ID: string;
  Version: Version;
  CreatedAt: string;
  UpdatedAt: string;
  Spec: Spec;
  Description: Description;
  Status: Status;
  ManagerStatus: ManagerStatus;
}
export interface Version {
  Index: number;
}
export interface Spec {
  Name: string;
  Role: string;
  Availability: string;
  Labels: JSON;
}

export interface Description {
  Hostname: string;
  Platform: Platform;
  Resources: Resources;
  Engine: Engine;
}
export interface Platform {
  Architecture: string;
  OS: string;
}
export interface Resources {
  NanoCPUs: number;
  MemoryBytes: number;
}
export interface Engine {
  EngineVersion: string;
  Labels: JSON;
  Plugins?: (PluginsEntity)[] | null;
}
export interface PluginsEntity {
  Type: string;
  Name: string;
}
export interface Status {
  State: string;
  Addr: string;
}
export interface ManagerStatus {
  Leader: boolean;
  Reachability: string;
  Addr: string;
}
