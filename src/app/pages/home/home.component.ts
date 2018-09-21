import { Component, OnInit } from '@angular/core';

import { Chart } from 'chart.js';

import { NetworkService } from '../../services/network/network.service';
import { VolumeService } from '../../services/volume/volume.service';
import { TaskService } from '../../services/task/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public volumes = [];
  public numVol = 0;
  public networks = [];
  public numNet = 0;
  public tasks = [];
  public numTask = 0;

  public runTask = 0;
  public pauseTask = 0;
  public stopTask = 0;

  constructor(
    private networkService: NetworkService,
    private volumeService: VolumeService,
    private taskService: TaskService
  ) {}
  chart;
  ngOnInit() {
    this.getStats();

    this.chart = new Chart('myChart', {
      type: 'pie',
      data: {
        labels: ['Volumes', 'Networks', 'Services', 'Tasks', 'Containers'],
        datasets: [
          {
            backgroundColor: [
              '#FF0000',
              '#FFA500',
              '#008080',
              '#008000',
              '#800080',
            ],
            data: [10, 1, 1, 2, 5],
          },
        ],
      },
    });

    this.chart = new Chart('chart2', {
      type: 'doughnut',
      data: {
        labels: ['Running Tasks', 'Failed Tasks', 'Stopped Tasks'],
        datasets: [
          {
            backgroundColor: ['#008080', '#FFA500', '#FF0000'],
            data: [1, 2, this.stopTask],
          },
        ],
      },
    });
  }

  getStats() {
    this.volumeService.getVolumes().subscribe(
      (volume) => {
        for (let i = 0; i < volume.length; i++) {
          this.volumes.push(volume[i]);
        }
        this.numVol = this.volumes.length;
      },
      (err) => {
        console.error(err);
      }
    );

    this.networkService.getNetworks().subscribe(
      (network) => {
        for (let i = 0; i < network.length; i++) {
          this.networks.push(network[i]);
        }
        this.numNet = this.networks.length;
      },
      (err) => {
        console.error(err);
      }
    );

    this.taskService.getTasks().subscribe(
      (task) => {
        for (let i = 0; i < task.length; i++) {
          this.tasks.push(task[i]);

          console.log(task[i].Status.State);

          if (task[i].Status.State === 'running') {
            this.runTask++;
          }

          if (task[i].Status.State === 'shutdown') {
            this.stopTask++;
          }

          if (task[i].Status.State === 'failed') {
            this.pauseTask++;
          }
        }
        this.numTask = this.tasks.length;
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
