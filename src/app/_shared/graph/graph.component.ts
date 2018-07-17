import { Component, OnInit } from "@angular/core";
import { GraphService } from "../../_services/graphs/graph.service";
import { Chart } from "chart.js";

@Component({
  selector: "app-graph",
  templateUrl: "./graph.component.html",
  styleUrls: ["./graph.component.css"]
})
export class GraphComponent implements OnInit {
  constructor() {}
  chart;

  ngOnInit() {
    this.chart = new Chart("myChart", {
      type: "pie",
      data: {
        labels: ["Volumes", "Networks", "Services", "Tasks", "Containers"],
        datasets: [
          {
            backgroundColor: [
              "#FF0000",
              "#FFA500",
              "#008080",
              "#008000",
              "#800080"
            ],
            data: [2, 1, 1, 5, 10]
          }
        ]
      }
    });

    this.chart = new Chart("myChartbar", {
      type: "bar",
      data: {
        labels: [
          "Container1",
          "Container2",
          "Container3",
          "Container4",
          "Container5"
        ],
        datasets: [
          {
            // label: "CPU usage (per Container)",
            backgroundColor: [
              "#FF1000",
              "#FFA510",
              "#008180",
              "#008100",
              "#801080"
            ],
            data: [10, 25, 5, 20, 4]
          }
        ]
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: "CPU usage (per Container)"
        }
      }
    });

    this.chart = new Chart("chart2", {
      type: "doughnut",
      data: {
        labels: ["Running Tasks", "Paused Tasks", "Stopped Tasks"],
        datasets: [
          {
            backgroundColor: ["#008080", "#FFA500", "#FF0000"],
            data: [13, 2, 5]
          }
        ]
      }
    });
  }
}
