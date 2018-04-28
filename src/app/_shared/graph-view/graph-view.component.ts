import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph-view',
  templateUrl: './graph-view.component.html',
  styleUrls: ['./graph-view.component.css']
})
export class GraphViewComponent implements OnInit {

    id: string = 'AngularChart2';
    width: number = 600;
    height: number = 400;
    type: string = 'pie3d';
    dataFormat: string = 'json';
    dataSource;

  constructor() {
      this.dataSource = {
          "chart": {
              "caption": "Electronics Selling",
              "subCaption": "Top 5 stores in last month by revenue",
              "numberprefix": "Rs.(Crore) ",
              "theme": "fint"
          },
          "data": [{
              "label": "Redmi",
              "value": "95"
              },
              {
                  "label": "IPhone",
                  "value": "90"
              },
              {
                  "label": "Motorola",
                  "value": "76"
              },
              {
                  "label": "Samsung",
                  "value": "67"
              },
              {
                  "label": "vivo",
                  "value": "55"
              }
          ]
      }
  }

    ngOnInit() {
  }

}
