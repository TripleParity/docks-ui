import { Component, OnInit } from '@angular/core';
import { AuthService, AuthError } from '../_services/auth/auth.service';
import { Router } from '@angular/router';
import { ConfigurationService } from '../_services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  busy = false;
  statusMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private configService: ConfigurationService
  ) {}

  ngOnInit() {}

  // TODO(egeldenhuys): Form validation
  public login(username: string, password: string): void {
    this.busy = true;

    this.authService.getToken(username, password).subscribe(
      response => {
        if (response === AuthError.AUTH_OK) {
          this.router.navigate(['/']);
        }
      },
      err => {
        if (err === AuthError.AUTH_ERR_CREDENTIALS) {
          this.statusMessage = 'Invalid username or password';
        } else if (err === AuthError.AUTH_ERR_SERVER) {
          this.statusMessage =
            'Unable to connect to ' + this.configService.getAPIHostname();
        } else {
          this.statusMessage = 'Something went wrong';
        }
        this.busy = false;
      }
    );
  }
}
