import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import {DockerService} from '../_services/docker.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})

export class ContainerComponent implements OnInit {
    public viewContainers: boolean = false;
    public useFilter: boolean = false;

    constructor(private dockerService: DockerService, public snackBar: MatSnackBar) { }

    public status: string;
    public containers: any[] = [];
    ngOnInit() {
        this.isHostUp();
        this.listContainers(this.viewContainers, this.useFilter);
        Observable.interval(10000).subscribe(() => {
            this.isHostUp();
            this.listContainers(this.viewContainers, this.useFilter);
        });
    }

    public stopContainer(id: string) {
      this.openSnackBar("Stopping container...");
      this.dockerService.stopContainer(id).subscribe( () => this.openSnackBar('Stopping container ' + id.slice(0,6) + ' done'), (err) => this.openSnackBar(err.statusText));
    }

    public startContainer(id: string) {
      this.openSnackBar("Starting container...");
        this.dockerService.startContainer(id).subscribe( () => this.openSnackBar('Starting container ' + id.slice(0,6) + ' done'), (err) => this.openSnackBar(err.statusText));
    }

    public listContainers(viewAll: boolean, filtering: boolean) {
        this.containers = [];
        this.viewContainers = viewAll;
        this.useFilter = filtering;
        const buffer: Observable<string> = this.dockerService.getContainers(this.viewContainers, this.useFilter);
        buffer.subscribe((data) => {
            for (let i = 0; i < data['length']; i++) {
                // Add img here
                // red: https://ibb.co/iWeRgc
                // blue: "https://forums.docker.com/uploads/default/original/2X/8/8425fda4f1fa565a5dbf5c5f60cc43a972fd30b9.png"
                if (data[i]['Status'].toString().includes('Exited')) {
                    data[i]['imgSrc'] = 'https://image.ibb.co/icegEx/8425fda4f1fa565a5dbf5c5f60cc43a972fd30b9red.png';
                    data[i]['Toggle'] = 'Start';
                } else {
                    data[i]['imgSrc'] =
                        'https://forums.docker.com/uploads/default/original/2X/8/8425fda4f1fa565a5dbf5c5f60cc43a972fd30b9.png';
                    data[i]['Toggle'] = 'Stop';
                }
                this.containers.push(data[i]);
            }
        }, (err) => {
            console.log('Service is down.');
        });

    }

    public toggleContainer(id: string) {
        /*
            Loop through the array of containers and find the correct one.
            if it is started we stop it, otherwise we start it.

         */
        this.containers.forEach((container) => {
            if (container['Id'] === id) {
                if (container['Toggle'] === 'Stop') {
                    container['Toggle'] = 'Start';
                    this.stopContainer(id);
                } else {
                    container['Toggle'] = 'Stop';
                    this.startContainer(id);
                }
            }
        });
    }

    public isHostUp() {
        const observable = this.dockerService.pingHost();
        observable.subscribe(() => this.status = 'Running', err => {
            if (err.status === 0) {
                this.status = 'Down';
            } else {
                this.status = 'Running';
            }
        });
    }

    public attachContainer(id: string) {
        const obvs: Observable<string> = this.dockerService.attachContainer(id);
        obvs.subscribe((data) => console.log('data: ' + data), (err) => console.log(err));
    }

    public deleteContainer(id: string) {
        const obvs: Observable<string> = this.dockerService.removeContainer(id);
        obvs.subscribe((data) => this.openSnackBar('Deleting container ' + id.slice(0,6) + ' done'), (err) => this.openSnackBar(err.statusText));

    }

    public openSnackBar(s : string) {
        this.snackBar.open(s, '', {
            duration: 3000,
        });
    }
}
