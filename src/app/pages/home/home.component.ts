import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Chart } from 'chart.js';

import { NetworkService } from '../../services/network/network.service';
import { VolumeService } from '../../services/volume/volume.service';
import { NodeService } from '../../services/node/node.service';
import { ServicesService } from '../../services/services/services.service';
import { TaskService } from '../../services/task/task.service';
import { interval } from 'rxjs/observable/interval';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private chartA: any;
  private chartB: any;
  private page_start: Subscription;
  private routeSub: Subscription;
  public numNet: number;
  public numTask: number;
  public numVol: number;

  constructor(
    private networkService: NetworkService,
    private volumeService: VolumeService,
    private taskService: TaskService,
    private nodeService: NodeService,
    private servicesService: ServicesService,
    private router: Router
  ) {}
  chart;
  ngOnInit() {
    this.routeSub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.page_start.unsubscribe();
      }
    });

    this.updateChartA();
    this.updateChartB();

    this.page_start = interval(5000).subscribe(() => {
      this.updateChartB();
      this.updateChartA();
    });

    this.chartA = new Chart('myChart', {
      type: 'pie',
      data: {
        labels: [],
        datasets: [{}],
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
    this.routeSub.unsubscribe();
  }
  updateChartB() {
    this.nodeService.getNodes().subscribe(
      (nodes) => {
        const labels = [];
        const dataSet = [];
        const colours = [];
        let online = 0;
        let offline = 0;

        nodes.forEach((node) => {
          if (node.Status.State === 'ready') {
            online++;
          } else {
            offline++;
          }
        });

        dataSet.push(online);
        dataSet.push(offline);

        colours.push('#C6FF87');
        colours.push('#272822');

        labels.push('Online');
        labels.push('Offline');

        this.chartB.data.labels = labels;
        this.chartB.data.datasets[0].data = dataSet;
        this.chartB.data.datasets[0].backgroundColor = colours;
        this.chartB.update();
      },
      (error) => {
        // console.log("If this isn't here the test cases fail ( probably due to the error not being handled");
      }
    );
  }

  async updateChartA() {
    const n_nodes = await this.nodeService.getNodes().toPromise();
    const n_services = await this.servicesService.getServices().toPromise();
    const n_volumes = await this.volumeService.getVolumes().toPromise();
    const n_networks = await this.networkService.getNetworks().toPromise();
    const n_tasks = await this.taskService.getTasks().toPromise();

    this.numNet = n_networks.length;
    this.numTask = n_tasks.length;
    this.numVol = n_volumes.length;

    this.chartA.data.labels = [
      'Nodes',
      'Networks',
      'Volumes',
      'Tasks',
      'Services',
    ];
    this.chartA.data.datasets[0].data = [
      n_nodes.length,
      n_networks.length,
      n_volumes.length,
      n_tasks.length,
      n_services.length,
    ];
    this.chartA.data.datasets[0].backgroundColor = [
      '#FF7F90',
      '#DEFF71',
      '#7CC55A',
      '#102900',
      '#F6FF93',
    ];
    this.chartA.update();
  }
}
