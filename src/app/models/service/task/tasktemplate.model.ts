/**
 * TaskTemplate interface for Services.
 *
 * @interface
 */
export interface TaskTemplate {
    ContainerSpec: {
        Image: String;
    };
    Resources: {
        Limits: JSON;
        Reservations: JSON;
    };
    RestartPolicy: {
        Condition: string;
        MaxAttempts: number;
    };
    Placement?: {
        Constraints?: string[];
        Preferences?: {
            Spread?: {
                SpreadDescriptor?: string;
                [k: string]: any
            };
            [k: string]: any;
        }[];
        ForceUpdate: number;
    };
}
