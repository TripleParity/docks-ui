import {HttpInterceptor, HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInjector} from './_classes/authinjector/authinjector';
import {AuthService} from './_services/auth/auth.service';

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {NavbarComponent} from './_shared';
import { TaskListViewComponent } from './_shared';
import {UserBarComponent} from './_shared';


import {ContainersComponent} from './_shared/containers/containers.component';
import {ConfigurationService, ContainerService, TaskService, MockService} from './_services/';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {TokenStorage} from './_classes';

import { GraphViewComponent } from './_shared/tasks/graph-view/graph-view.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

@NgModule({
    declarations: [
        NavbarComponent,
        AppComponent,
        ContainersComponent,
        TaskListViewComponent,
        GraphViewComponent,
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
        MockService,
        AuthService,
        TokenStorage,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
