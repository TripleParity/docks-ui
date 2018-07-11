import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import {AppRoutingModule} from 'app/app-routing.module';

import {AppComponent} from 'app/app.component';

import {TokenStorage, AuthInjector} from 'app/_classes';

import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { PageNotFoundComponent } from 'app/_shared';

import { LoginComponent } from '_shared/login/login.component';
import { HomeModule} from '_shared/home/home.module';
import { AuthService } from '_services/auth/auth.service';
import { RefreshComponent } from 'app/refresh/refresh.component';
import { SpinnerComponent } from '_shared/spinner/spinner.component';

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
