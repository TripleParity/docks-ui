import {Component, OnInit} from '@angular/core';
import {Formatter} from '../../../_classes';
import {MockService, TaskService} from '../../../_services';
import {Task} from '../../../_models';

@Component({
    selector: 'app-card-view',
    templateUrl: './card-view.component.html',
    styleUrls: ['./card-view.component.css']
})
export class TaskCardViewComponent implements OnInit {

    constructor(private taskService: TaskService, private mockService: MockService) {
    }

    public tasks: Task[] = [];

    ngOnInit() {
        this.mockService.getTasks().subscribe((task) => {
            for (let i = 0; i < task.length; i++) {
                this.tasks.push(task[i]);
            }
        });
    }

    public PrettifyDateTime(buff: string): string {
        return Formatter.PrettifyDateTime(buff);
    }

    public getState(ste: string): string {
        console.log(ste);
        switch (ste) {
            // 'NEW' The task was initialized
            case 'NEW': {
                return 'primary-card';
            }
            // PENDING	Resources for the task were allocated
            case 'PENDING': {
                return 'warning-card';
            }
            // ASSIGNED	Docker assigned the task to nodes.
            case 'ASSIGNED': {
                return 'info-card';
            }
            // ACCEPTED	The task was accepted by a worker node. If a worker node rejects the task, the state changes to REJECTED.
            case 'ACCEPTED': {
                return 'info-card';
            }
            // PREPARING	Docker is preparing the task.
            case 'PREPARING': {
                return 'info-card';
            }
            // STARTING	Docker is starting the task.
            case 'STARTING': {
                return 'info-card';
            }
            // RUNNING	The task is executing.
            case 'RUNNING': {
                return 'success-card';
            }
            // COMPLETE	The task exited without an error code.
            case 'COMPLETE': {
                return 'success-card';
            }
            // FAILED	The task exited with an error code.
            case 'FAILED': {
                return 'dark-card';
            }
            // SHUTDOWN	Docker requested the task to shut down.
            case 'SHUTDOWN': {
                return 'danger-card';
            }
            // REJECTED	The worker node rejected the task.
            case 'REJECTED': {
                return 'danger-card';
            }
            // ORPHANED	The node was down for too long.
            case 'ORPHANED': {
                return 'danger-card';
            }
            // REMOVE	The task is not terminal but the associated service was removed or scaled down.
            case 'REMOVE': {
                return 'danger-card';
            }
            // Something went wrong
            default: {
                return 'dark-card';
            }
        }
    }
}
