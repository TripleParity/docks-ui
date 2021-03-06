/**
 * Config interface for Services.
 *
 * @interface
 */
export interface Config {
  Parallelism: number;
  Delay: number;
  FailureAction: string;
  Monitor: number;
  MaxFailureRatio: number;
}
