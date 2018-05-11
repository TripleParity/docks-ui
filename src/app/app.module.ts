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
import { VolumesComponent } from './_shared/volumes/volumes.component';
import { LoginpageComponent } from './_shared/loginpage/loginpage.component';
import {VolumesModule} from './_shared/volumes/volumes.module';
import {ServicesService} from './_services/services/services.service';
import { ServicesOperationsComponent } from './_shared/services/operations/services-operations.component';
import { ServicesCardViewComponent } from './_shared/services/card-view/services-card-view.component';
import {FormsModule} from '@angular/forms';

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
        LoginpageComponent,
        ServicesOperationsComponent,
        ServicesCardViewComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        NgbModule.forRoot(),
        AppRoutingModule,
        AngularFontAwesomeModule,
        VolumesModule,
        FormsModule,
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
