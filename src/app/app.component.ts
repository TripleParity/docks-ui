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

    constructor(private http: HttpClient, private dockerService: DockerService) { }
    private status: string;

    ngOnInit() {
        this.isHostUp();
        Observable.interval(5000).subscribe(() => {
            this.isHostUp();
        });
    }

    public listContainers() {
        const buffer = this.dockerService.getContainers();
        buffer.subscribe((data) => {
            alert(data[0]['Id']);
        }, (err) => {
            alert('Service is down.');
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


