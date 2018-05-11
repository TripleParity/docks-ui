import {HttpInterceptor, HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInjector} from './_classes';
import {AuthService} from './_services/auth/auth.service';

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {NavbarComponent} from './_shared';
import { TaskListViewComponent } from './_shared';
import {UserBarComponent} from './_shared';
import { ServiceListViewComponent } from './_shared';


import {ContainersComponent} from './_shared/containers/containers.component';

import {NgbAlert, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ConfigurationService, ContainerService, TaskService, MockService, VolumeService} from './_services/';

import {HttpClientModule} from '@angular/common/http';
import {TokenStorage} from './_classes';

import { GraphViewComponent } from './_shared/tasks/graph-view/graph-view.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { TaskCardViewComponent } from './_shared/tasks/card-view/task-card-view.component';
import { PageNotFoundComponent } from './_shared';
import { GraphComponent } from './_shared/graph/graph.component';

// Added to test
import {GraphService} from './_services/graphs/graph.service';
// import { Volume } from './_shared/volumes/list-view/';
import {ServicesService} from './_services/services/services.service';
import { ServicesCardViewComponent } from './_shared/services/card-view/services-card-view.component';
import { VolumeOperationsComponent } from './_shared/volumes/volume-operations/volume-operations.component';
// import { VolumeListViewComponent } from './_shared/volumes/list-view/volume-list-view.component';
// import { VolumeCardViewComponent } from './_shared/volumes/card-view/volume-card-view.component';

@NgModule({
    declarations: [
        NavbarComponent,
        AppComponent,
        ContainersComponent,
        TaskListViewComponent,
        GraphViewComponent,
        UserBarComponent,
        TaskCardViewComponent,
        ServiceListViewComponent,
        PageNotFoundComponent,
        GraphComponent,
        ServicesCardViewComponent,
        VolumeOperationsComponent,
        // VolumeListViewComponent,
        // VolumeCardViewComponent
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
        ServicesService,
        AuthService,
        TokenStorage,
        MockService,
        GraphService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
