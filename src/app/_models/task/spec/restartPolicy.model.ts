/**
 * RestartPolicy interface for Spec
 *
 * @interface
 */
export interface RestartPolicyModel {
    Condition: string;
    MaxAttempts: number;
}
