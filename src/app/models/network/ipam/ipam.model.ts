/**
 * IPAM interface for Networks
 *
 * @interface
 */
export interface Ipam {
  /**
   * Name of the IPAM driver to use.
   */
  Driver?: string;
  /**
   * List of IPAM configuration options, specified as a map:
   * `{"Subnet": <CIDR>, "IPRange": <CIDR>, "Gateway": <IP address>, "AuxAddress": <device_name:IP address>}`
   */
  Config?: {
      [name: string]: string;
  }[];
  /**
   * Driver-specific options, specified as a map.
   */
  Options?: {
      [name: string]: string;
  }[];
}
