import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';



@Injectable()
export class StackService {
  private host: string;
  constructor(private http: HttpClient) {
        this.host = 'http://localhost:8080';
  }
}
