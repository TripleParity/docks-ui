import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DockerService} from './_services/docker.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    constructor(private dockerService: DockerService) { }
    private status: string;
    private containers: any[] = [];
    ngOnInit() {
        this.isHostUp();
        this.listContainers();
        Observable.interval(10000).subscribe(() => {
            this.isHostUp();
            this.listContainers();
        });
    }

    public listContainers() {
        this.containers = [];
        const buffer: Observable<string> = this.dockerService.getContainers();
        buffer.subscribe((data) => {
            for (let i = 0; i < data['length']; i++) {
                this.containers.push(data[i]);
            }
        }, (err) => {
            console.log('Service is down.');
        });

    }

    public isHostUp() {
        const observable = this.dockerService.pingHost();
        observable.subscribe(() => this.status = 'Running', err => {
            if (err.status === 404) {
                this.status = 'Running';
            } else {
                this.status = 'Down';
            }
        });
    }
}


