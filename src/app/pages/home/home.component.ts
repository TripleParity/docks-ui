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
  public cards: any[] = [];
  private colours: any[] = ['#1180af', '#C6FF87', '#27548c', '#94E864'];

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
    this.cards = [];
    this.cards.push({
      title: 'Networks',
      text: '0',
      src: 'fa fa-sitemap',
      route: '/networks',
    });
    this.cards.push({
      title: 'Volumes',
      text: '0',
      src: 'fa fa-book',
      route: '/volumes',
    });
    this.cards.push({
      title: 'Tasks',
      text: '0',
      src: 'fa fa-tag',
      route: '/tasks/list',
    });
    this.cards.push({
      title: 'Services',
      text: '0',
      src: 'fa fa-tags',
      route: '/services/list',
    });
    this.cards.push({
      title: 'Nodes',
      text: '0',
      src: 'fa fa-tasks',
      route: '/nodes',
    });

    this.routeSub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.page_start.unsubscribe();
      }
    });

    this.updateChartA();
    this.updateChartB();
    this.count_types();
    this.page_start = interval(5000).subscribe(() => {
      this.updateChartA();
      this.updateChartB();
      this.count_types();
    });

    this.chartA = new Chart('chart1', {
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

        labels.push('Online');
        labels.push('Offline');

        this.chartB.data.labels = labels;
        this.chartB.data.datasets[0].data = dataSet;
        this.chartB.data.datasets[0].backgroundColor = this.colours;
        this.chartB.update();
      },
      (error) => {
        // console.log("If this isn't here the test cases fail ( probably due to the error not being handled");
      }
    );
  }

  updateChartA() {
    const me = this;
    this.taskService.getTasks().subscribe(
      (tasks) => {
        const labels = [];
        const dataSet = [];
        // let colours = [];
        const nodesArray = [];

        tasks.forEach((task) => {
          const temp = nodesArray.find(
            (ob) => ob['name'] === task.NodeHostname
          );
          if (temp !== undefined) {
            temp.tasks++;
          } else {
            nodesArray.push({ name: task.NodeHostname, tasks: 1 });
          }
        });

        nodesArray.forEach((node) => {
          dataSet.push(node['tasks']);
        });

        nodesArray.forEach((node) => {
          labels.push(node['name']);
        });

        this.chartA.data.labels = labels;
        this.chartA.data.datasets[0].data = dataSet;
        this.chartA.data.datasets[0].backgroundColor = this.colours;
        this.chartA.update();
      },
      (error) => {
        // console.log("If this isn't here the test cases fail ( probably due to the error not being handled");
      }
    );
  }

  async count_types() {
    const n_nodes = await this.nodeService.getNodes().toPromise();
    const n_services = await this.servicesService.getServices().toPromise();
    const n_volumes = await this.volumeService.getVolumes().toPromise();
    const n_networks = await this.networkService.getNetworks().toPromise();
    const n_tasks = await this.taskService.getTasks().toPromise();

    this.cards.forEach((card) => {
      switch (card['title']) {
        case 'Services': {
          card['text'] = n_services.length;
          break;
        }
        case 'Nodes': {
          card['text'] = n_nodes.length;
          break;
        }
        case 'Volumes': {
          card['text'] = n_volumes.length;
          break;
        }
        case 'Networks': {
          card['text'] = n_networks.length;
          break;
        }
        case 'Tasks': {
          card['text'] = n_tasks.length;
          break;
        }
      }
    });
  }
}
