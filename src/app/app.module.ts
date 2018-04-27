import {HttpInterceptor, HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInjector} from './_classes/authinjector/authinjector';
import {AuthService} from './_services/auth/auth.service';

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {NavbarComponent} from './_shared';
import {UserBarComponent} from './_shared';

import {ContainersComponent} from './_shared/containers/containers.component';
import {ConfigurationService, ContainerService, TaskService} from './_services/';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {TokenStorage} from './_classes';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

@NgModule({
    declarations: [
        NavbarComponent,
        AppComponent,
        ContainersComponent,
        UserBarComponent,
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
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
