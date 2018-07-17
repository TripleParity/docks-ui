import { TaskTemplate } from '../task/tasktemplate.model';
import { Mode } from '../mode/mode.model';
import { Config } from '../config/config.model';
import { EndpointSpec } from '../endpoint/endpointspec.model';

/**
 * Spec interface for Services.
 *
 * @interface
 */
export interface ServiceSpec {
  Name: string;
  Labels: JSON[];
  TaskTemplate: TaskTemplate;
  Mode: Mode;
  UpdateConfig: Config;
  RollbackConfig: Config;
  Networks: JSON[];
  EndpointSpec: EndpointSpec;
}
