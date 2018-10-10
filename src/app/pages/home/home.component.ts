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
  private chartB: any;
  private page_start: Subscription;
  private routeSub: Subscription;
  public cards: any[] = [];

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
    });
    this.cards.push({
      title: 'Volumes',
      text: '0',
      src: 'fa fa-book',
    });
    this.cards.push({
      title: 'Tasks',
      text: '0',
      src: 'fa fa-tag',
    });
    this.cards.push({
      title: 'Services',
      text: '0',
      src: 'fa fa-tags',
    });
    this.cards.push({
      title: 'Nodes',
      text: '0',
      src: 'fa fa-tasks',
    });

    this.routeSub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.page_start.unsubscribe();
      }
    });

    this.updateChartB();
    this.count_types();
    this.page_start = interval(5000).subscribe(() => {
      this.updateChartB();
      this.count_types();
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

        colours.push('#1180af');
        colours.push('#C6FF87');

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
