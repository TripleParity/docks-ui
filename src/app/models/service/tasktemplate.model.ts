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
  Placement: JSON;
  ForceUpdate: number;
}
