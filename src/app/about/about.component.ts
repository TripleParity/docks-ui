import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  public reveal() {
    this.http.get('http://localhost:8080/docker/containers/json', { responseType: 'json' }).subscribe( json => {
        for ( let i = 0; i < Object.keys(json).length; i++) {
          alert('Container ' + <number>(i + 1) + ': ' + json[i]['Id'].slice(0, 10));
        }
    });
  }
}
