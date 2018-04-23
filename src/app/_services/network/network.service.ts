import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpParams} from '@angular/common/http';
import 'rxjs/add/operator/map';



@Injectable()
export class NetworkService {
  private host: string;
  constructor(private http: HttpClient) {
        this.host = 'http://localhost:8080';
  }
}
