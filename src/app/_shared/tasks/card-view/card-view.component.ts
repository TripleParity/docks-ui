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
}
