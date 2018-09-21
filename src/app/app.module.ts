import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { AuthInjector } from './classes/authinjector/authinjector';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AuthService } from './services/auth/auth.service';

import { AuthGuard } from './shared/guards/auth.guard';

import { UserBarComponent } from 'app/shared/user-bar/user-bar.component';
import { NavbarComponent } from 'app/shared/navbar/navbar.component';
import { ConfigurationService } from 'app/services/configuration/configuration.service';
import { TokenStorage } from 'app/classes/tokenstorage/tokenstorage';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, UserBarComponent, NavbarComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
      resetTimeoutOnDuplicate: true,
      maxOpened: 1,
      autoDismiss: true,
    }),
    AppRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInjector,
      multi: true,
    },
    ConfigurationService,
    TokenStorage,
    AuthService,
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
