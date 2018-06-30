import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from 'app/user-management/models/user.model';
import { ConfigurationService } from 'app/_services';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ApiResponse } from 'app/user-management/models/api-response.model';

@Injectable()
export class UserService {
  private userEndpoint = null;

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigurationService
  ) {
    this.userEndpoint = configService.getAPIHostname() + '/users';
  }

  getUsers(): Observable<User[]> {
    return new Observable<User[]>((observer) => {
      this.httpClient.get<ApiResponse>(this.userEndpoint).subscribe(
        (res) => {
          // Unwrap the response
          observer.next(res.data);
        },
        (err) => {
          console.error(err);
          observer.error(err);
        }
      );
    });
  }
}
