import { Component, OnInit } from '@angular/core';

import { Chart } from 'chart.js';

import { NetworkService } from '../../services/network/network.service';
import { VolumeService } from '../../services/volume/volume.service';
import { TaskService } from '../../services/task/task.service';
import { interval } from 'rxjs/observable/interval';
import { Subscription } from 'rxjs';
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

  private chartA: any;
  private chartB: any;
  private page_start: Subscription;

  constructor(
    private networkService: NetworkService,
    private volumeService: VolumeService,
    private taskService: TaskService
  ) {}
  chart;
  ngOnInit() {
    this.updateChartB();
    this.page_start = interval(2000).subscribe(() => {
      this.updateChartB();
    });

    this.getStats();

    this.chartA = new Chart('myChart', {
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

    this.chartB = new Chart('chart2', {
      type: 'pie',
      data: {
        labels: [],
        datasets: [{}],
      },
    });
  }

  ngOnDestroy() {
    this.page_start.unsubscribe();
  }
  updateChartB() {
    let map = new Map<string, number>();
    let coloursMap = new Map<number, string>();
    coloursMap.set(0, '#C6FF87');
    coloursMap.set(1, '#272822');
    coloursMap.set(2, '#F92672');
    coloursMap.set(3, '#66D9EF');
    coloursMap.set(4, '#A6E22E');
    coloursMap.set(5, '#FD971F');
    coloursMap.set(6, '#FFFC87');
    coloursMap.set(7, '#E4FF87');

    this.taskService.getTasks().subscribe((tasks) => {
      tasks.forEach((task) => {
        if (!map.has(task.Status.State)) {
          map.set(task.Status.State, 0);
        } else {
          let old = map.get(task.Status.State);
          map.set(task.Status.State, old + 1);
        }
      });

      let labels = [];
      let dataSet = [];
      let colours = [];
      let i = 0;
      Array.from(map.values()).forEach((value) => {
        dataSet.push(value);
        colours.push(coloursMap.get(i++));
      });

      Array.from(map.keys()).forEach((key) => {
        labels.push(key);
      });

      this.chartB.data.labels = labels;
      this.chartB.data.datasets[0].data = dataSet;
      this.chartB.data.datasets[0].backgroundColor = colours;
      this.chartB.update();
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
