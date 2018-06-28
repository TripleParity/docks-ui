/**
 * NetworkAttachment interface for task
 *
 * @interface
 */
export interface NetworkAttachment {
    Network: {
        ID: string;
        Version: {
            Index: number;
        };
        CreatedAt: string;
        UpdatedAt: string;
        Spec: {
            Name: string;
            Labels: JSON;
            DriverConfiguration: JSON;
            IPAMOptions: {
                Driver: JSON;
                Configs: JSON;
            }
        }
    };
    Addresses: string[];
}
