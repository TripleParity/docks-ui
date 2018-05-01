import { Component, OnInit } from '@angular/core';
import {MockService, TaskService} from "../../../_services";
import {Task} from "../../../_models";
import {Formatter} from "../../../_classes";

@Component({
  selector: 'app-task-card-view',
  templateUrl: './task-card-view.component.html',
  styleUrls: ['./task-card-view.component.css']
})
export class TaskCardViewComponent implements OnInit {

  constructor(private taskService: TaskService, private mockService: MockService) { }
  public tasks: Task[] = [];

  ngOnInit() {
    this.mockService.getTasks().subscribe((task) =>
      {
        for (let i = 0; i < task.length; i++) {
          this.tasks.push(task[i]);
        }
      });
  }
    public PrettifyDateTime(buff: string): string {
        return Formatter.PrettifyDateTime(buff);
    }
}
