export interface Volume {
    CreatedAt: string;
    Name: string;
    Driver: string;
    Mountpoint: string;
    Scope: string;
    Labels: JSON;
    Options: JSON;
}
