import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';

import {TokenStorage, AuthInjector} from './_classes';

import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { PageNotFoundComponent } from './_shared';

import { LoginComponent } from './_shared/login/login.component';
import { HomeModule} from './_shared/home/home.module';
import { AuthService } from '_services/auth/auth.service';
import { RefreshComponent } from './refresh/refresh.component';
import { SpinnerComponent } from './_shared/spinner/spinner.component';

@NgModule({
    declarations: [
        PageNotFoundComponent,
        LoginComponent,
        RefreshComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        NgbModule.forRoot(),
        HomeModule,
        AppRoutingModule,
        AngularFontAwesomeModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInjector,
            multi: true
        },
        AuthService,
        TokenStorage,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
