import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpParams} from '@angular/common/http';
import 'rxjs/add/operator/map';

/*
    This service will be used for testing, for instance
    the json returned from the backend will always be the same
    structure.

    This service should be used to test parsing of that json
    and perhaps display of components. We could also use this for demos.

 */

@Injectable()
export class MockService {

}
