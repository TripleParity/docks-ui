import { Component, OnInit } from '@angular/core';
import { Formatter } from '../../../_classes';
import { MockService, TaskService } from '../../../_services';
import { Task } from '../../../_models';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-card-view',
  templateUrl: './task-card-view.component.html',
  styleUrls: ['./task-card-view.component.css'],
})
export class TaskCardViewComponent implements OnInit {
  constructor(
    private taskService: TaskService,
    private mockService: MockService,
    private modalService: NgbModal
  ) {}

  public isLoaded = false;
  public tasks: Task[] = [];
  public modalObject: Task;
  public modalObjectLog: string;

  ngOnInit() {
      this.taskService.getTasks().subscribe((task) => {
        for (let i = 0; i < task.length; i++) {
          this.tasks.push(task[i]);
        }
        this.isLoaded = true;
      });
  }

  public PrettifyDateTime(buff: string): string {
    return Formatter.PrettifyDateTime(buff);
  }

  public getState(ste: string): string {
    switch (ste) {
      // 'NEW' The task was initialized
      case 'NEW': {
        return 'primary';
      }
      // PENDING	Resources for the task were allocated
      case 'PENDING': {
        return 'warning';
      }
      // ASSIGNED	Docker assigned the task to nodes.
      case 'ASSIGNED': {
        return 'info';
      }
      // ACCEPTED	The task was accepted by a worker node. If a worker node rejects the task, the state changes to REJECTED.
      case 'ACCEPTED': {
        return 'info';
      }
      // PREPARING	Docker is preparing the task.
      case 'PREPARING': {
        return 'info';
      }
      // STARTING	Docker is starting the task.
      case 'STARTING': {
        return 'info';
      }
      // RUNNING	The task is executing.
      case 'RUNNING': {
        return 'success';
      }
      // COMPLETE	The task exited without an error code.
      case 'COMPLETE': {
        return 'success';
      }
      // FAILED	The task exited with an error code.
      case 'FAILED': {
        return 'dark';
      }
      // SHUTDOWN	Docker requested the task to shut down.
      case 'SHUTDOWN': {
        return 'danger';
      }
      // REJECTED	The worker node rejected the task.
      case 'REJECTED': {
        return 'danger';
      }
      // ORPHANED	The node was down for too long.
      case 'ORPHANED': {
        return 'danger';
      }
      // REMOVE	The task is not terminal but the associated service was removed or scaled down.
      case 'REMOVE': {
        return 'danger';
      }
      // Something went wrong
      default: {
        return 'light';
      }
    }
  }

  public loadModal(content, task) {
    this.modalObject = task;
    this.modalService.open(content, { size: 'lg' });
    this.mockService.getLog(this.modalObject.id).subscribe((log) => {
      this.modalObjectLog = log;
    });
  }

  public copyToClip() {
    // TODO(FJMentz) : Implement this
  }
}
