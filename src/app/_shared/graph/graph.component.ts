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
            type: 'doughnut',
            data: {
                labels: ["Disks", "Mgmt", "Hardware", "FC", "Vols&Pols"],
                datasets: [
                    {
                        backgroundColor:["#008000","#008000","#008000","#008000","#008000"],
                        data: [20,20,20,20,20]
                    }
                ]
            }
        });
    }
}
