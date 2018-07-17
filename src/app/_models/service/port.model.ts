/**
 * Port interface for Services.
 *
 * @interface
 */
export interface Port {
  Protocol: string;
  TargetPort: number;
  PublishedPort: number;
}
