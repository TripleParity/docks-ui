import { Component, OnInit } from '@angular/core';
import {GraphService} from '../../_services/graphs/graph.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

    constructor() { }
    chart;

    ngOnInit() {
        this.chart = new Chart('chart', {
            type: 'pie',
            data: {
                labels: ['Disks', 'Mgmt', 'Hardware', 'FC', 'Vols&Pols'],
                datasets: [
                    {
                        backgroundColor: ['#FF0000', '#FFA500', '#008080', '#008000', '#800080'],
                        data: [10, 25, 5, 20, 40]
                    }
                ]
            },
            options: {
                title: {
                    display: false
                },
                animations: true,
                tooltips: {
                    enabled: true
                },
                legend: {
                    display: true
                }
            }
        });
    }

}
