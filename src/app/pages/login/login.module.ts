import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from '../../pages/login/login.component';
import { AuthService, AuthError } from '../../services/auth/auth.service';
import { ConfigurationService } from '../../services/configuration/configuration.service';
import { LoginRoutingModule } from '../../pages/login/login-routing.module';


@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    NgbModule,
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    AuthService,
    ConfigurationService
  ]
})
export class LoginModule { }
