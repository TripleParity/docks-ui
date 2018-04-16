import { Component, OnInit } from '@angular/core';
import {ContainerService} from '../../_services';

@Component({
  selector: 'app-containers',
  templateUrl: './containers.component.html',
  styleUrls: ['./containers.component.css']
})
export class ContainersComponent implements OnInit {

  constructor(private cs: ContainerService) { }

  ngOnInit() {
    this.cs.getContainer().subscribe(containers => {
      for (let i = 0; i < containers.length; i++) {
          console.log(containers[i]);
      }
    });
  }

}
