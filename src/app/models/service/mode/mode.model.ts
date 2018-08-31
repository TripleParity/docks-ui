/**
 * Mode interface for Services.
 *
 * @interface
 */
export interface Mode {
  Replicated?: {
    Replicas: number;
  };

  Global?: { };
}
