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
import { PageNotFoundComponent } from './_shared';
import {NetworkModule} from './_shared/networks/network.module';
import { NetworkComponent } from './_shared/networks/network.component';
import { GraphComponent } from './_shared/graph/graph.component';

// Added to test
import {GraphService} from './_services/graphs/graph.service';

@NgModule({
    declarations: [
        NavbarComponent,
        AppComponent,
        ContainersComponent,
        UserBarComponent,
        ServiceListViewComponent,
        PageNotFoundComponent,
        GraphComponent,
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
        GraphService    // Added for testing
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
