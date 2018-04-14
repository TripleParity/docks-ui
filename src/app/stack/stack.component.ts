import { Component, OnInit } from '@angular/core';
import {DockerService} from '../_services/docker.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css']
})
export class StackComponent implements OnInit {

  constructor(private dockerService: DockerService) { }
  public rawData: string;

  ngOnInit() {
      this.rawData = `
        version: '3.2'

services:
  angular:
    build:
      context: .
      dockerfile: Dockerfile-dev
    volumes:
      - type: bind
        source: ./
        target: /app
    ports:
      - "4200:4200"

      `;
  }

  public createStack() {
        const post: Observable<string> = this.dockerService.createStack(this.rawData);
        post.subscribe(() => console.log('Created stack.'), (err) => console.log(err));
  }
}
