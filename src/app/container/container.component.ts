import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import {DockerService} from '../_services/docker.service';
@Component({
  selector: 'app-root',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})

export class ContainerComponent implements OnInit {

    constructor(private dockerService: DockerService) { }
    public status: string;
    public containers: any[] = [];
    ngOnInit() {
        this.isHostUp();
        this.listContainers();
        Observable.interval(10000).subscribe(() => {
            this.isHostUp();
            this.listContainers();
        });
    }

    public stopContainer(id: string) {
        this.dockerService.stopContainer(id).subscribe( () => {}, (err) => console.log(err));
    }

    public startContainer(id: string) {
        this.dockerService.startContainer(id).subscribe( () => {}, (err) => console.log(err));
    }

    public listContainers() {
        this.containers = [];
        const buffer: Observable<string> = this.dockerService.getContainers(true);
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
}
