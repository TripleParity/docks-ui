import {HttpInterceptor, HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInjector} from './_classes';
import {AuthService} from './_services/auth/auth.service';

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {NavbarComponent} from './_shared';
import {UserBarComponent} from './_shared';
import { ServiceListViewComponent } from './_shared';

import {ContainersComponent} from './_shared/containers/containers.component';
import {ConfigurationService, ContainerService, MockService, TaskService} from './_services/';
import {NgbAlert, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {TokenStorage} from './_classes';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { PageNotFoundComponent } from './_shared/pagenotfound/pagenotfound.component';

@NgModule({
    declarations: [
        NavbarComponent,
        AppComponent,
        ContainersComponent,
        UserBarComponent,
        ServiceListViewComponent,
        PageNotFoundComponent,
        NgbAlert,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        NgbModule.forRoot(),
        AppRoutingModule,
        AngularFontAwesomeModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInjector,
            multi: true
        },
        ConfigurationService,
        ContainerService,
        TaskService,
        AuthService,
        TokenStorage,
        MockService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
