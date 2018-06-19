import { Component, OnInit } from '@angular/core';
import { AuthService, AuthError } from '_services/auth/auth.service';
import { Router } from '@angular/router';
import { ConfigurationService } from '_services/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public busy = false;
  public statusMessage = '';
  public passwordError = false;
  public usernameError = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private configService: ConfigurationService
  ) {}

  ngOnInit() {}

  /**
   * Check if given credentials are complete
   * @param username
   * @param password
   * @returns true if credentials are complete, otherwise false
   */
  private validateLogin(username: string, password: string): boolean {
    this.passwordError = false;
    this.usernameError = false;

    if (username.length === 0) {
      this.usernameError = true;
    }

    if (password.length === 0) {
      this.passwordError = true;
    }

    return !(this.passwordError || this.usernameError);
  }

  public login(username: string, password: string): void {
    this.statusMessage = '';

    if (!this.validateLogin(username, password)) {
      return;
    }

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
