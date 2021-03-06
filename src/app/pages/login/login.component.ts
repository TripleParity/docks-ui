import { Component, OnInit } from '@angular/core';
import { AuthService, AuthError } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { ConfigurationService } from '../../services/configuration/configuration.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public busy = false;
  public passwordError = false;
  public usernameError = false;
  public showTokenInput = false;
  public showTokenQR = false;
  public tokenQRImageSource = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private configService: ConfigurationService,
    private toastr: ToastrService
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

  public login(username: string, password: string, token: string): void {
    if (!this.validateLogin(username, password)) {
      this.toastr.error('Invalid username or password', 'Login error');
      return;
    }

    this.busy = true;

    this.authService.getToken(username, password, token).subscribe(
      (response) => {
        if (response === AuthError.AUTH_OK) {
          this.toastr.clear();
          this.router.navigate(['/']);
        }
      },
      (err) => {
        this.showTokenQR = false;
        if (err === AuthError.AUTH_ERR_CREDENTIALS) {
          this.toastr.error('Invalid credentials', 'Login error');
        } else if (err === AuthError.AUTH_ERR_TWO_FACTOR_TOKEN_REQUIRED) {
          this.toastr.info(
            'Please supply your two-factor token',
            'Token Required'
          );
          this.showTokenInput = true;
        } else if (err === AuthError.AUTH_ERR_SERVER) {
          this.toastr.error(
            'Unable to connect to ' + this.configService.getAPIHostname(),
            'Server error'
          );
        } else if (err === AuthError.AUTH_ERR_INITIAL_TWO_FACTOR_TOKEN) {
          this.toastr.info('Scan the Two-Factor token.', 'Token');
          this.showTokenInput = true;
          this.authService.getQRCode(username, password).subscribe(
            (response) => {
              this.tokenQRImageSource = response.qrImageData;
              this.showTokenQR = true;
            },
            (error) => {
              // TODO(devosray): Error handling
              console.log('ERR: ' + error);
            }
          );
        } else {
          this.toastr.error('Something went wrong', 'An error occured');
        }
        this.busy = false;
      }
    );
  }
}
