/**
 * IPAM interface for Networks
 *
 * @interface
 */
export interface Ipam {
  Driver: string;
  Config: JSON;
}
