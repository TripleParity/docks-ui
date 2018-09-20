export interface User {
  username: string;
  password: string;
  twofactorenabled?: boolean;
  twofactorconfirmed?: boolean;
}
