import { Component, OnInit } from '@angular/core';
import { Task } from '../../../models/task/task.model';
import { TaskService, TaskError } from '../../../services/task/task.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NodeService, NodeError } from 'services/node/node.service';
import { Node } from 'app/models/node/node.model';
import { element } from 'protractor';

@Component({
  selector: 'app-task-list-view',
  templateUrl: './task-list-view.component.html',
  styleUrls: ['./task-list-view.component.css'],
})
export class TaskListViewComponent implements OnInit {
  constructor(
    private taskService: TaskService,
    private nodeService: NodeService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  public tasks: Task[] = [];
  public previous = 0;
  public isLoaded = false;
  public selected = [];
  private NodeNames: Node[] = [];

  ngOnInit() {
    this.fetchTasks();
  }

  fetchTasks() {
    this.taskService.getTasks().subscribe(
      (task) => {
        this.tasks = task;
        this.isLoaded = true;
        this.getNodeName();
      },
      (err: TaskError) => {
        this.toastr.error(err.message, 'An error occured');
      }
    );
  }

  getRowHeight(row) {
    return (row.height = 50);
  }

  getTaskName(labels: Object, slot: number, id: string): string {
    if (labels && labels.hasOwnProperty('com.docker.stack.namespace')) {
      return labels['com.docker.stack.namespace'] + '.' + slot;
    } else {
      return id;
    }
  }

  onSelect({ selected }) {
    this.router.navigate(['/tasks/' + selected[0].ID]);
  }

  getImage(image: String): string {
    const taskImage = image.split('@');
    return taskImage[0];
  }

  getNodeName() {
    this.tasks.forEach( task => {
      const nodeName = this.contains(task.NodeID);

      if (nodeName !== null) { // if a node with this ID has already been found
        task.NodeName = nodeName.Description.Hostname;
      } else {
        // console.log('Only see this once');
        this.nodeService.inspectNode(task.NodeID).subscribe(
          (node) => {
            task.NodeName = node.Description.Hostname;
            this.NodeNames.push(node); // add the node to the list of node names
            // console.log(this.NodeNames.length);
          },
          (err: NodeError) => {
            this.toastr.error(err.message, 'An error retrieving Node name occured');
          }
        );
      }
    });
  }

  contains(nodeID: String): Node {
    // console.log('length at search ' + this.NodeNames.length);
    this.NodeNames.forEach(node => {

      if (nodeID === node.ID) {
        return node;
      }
    });
    return null;
  }
}
