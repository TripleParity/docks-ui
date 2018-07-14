import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AuthInjector } from './classes/authinjector/authinjector';
import { TokenStorage } from './classes/tokenstorage/tokenstorage';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PageNotFoundComponent } from './pages/pagenotfound/pagenotfound.component';

import { LoginComponent } from './pages/login/login.component';
import { AuthService } from './services/auth/auth.service';
import { RefreshComponent } from './pages/refresh/refresh.component';

import { AuthGuard } from './shared/guards/auth.guard';
import { ServicesService } from './services/services/services.service';

import { ConfigurationService } from './services/configuration/configuration.service';
import { ContainerService } from './services/container/container.service';
import { MockService } from './services/mock/mock.service';
import { TaskService } from './services/task/task.service';
import { GraphService } from './services/graphs/graph.service';
import { ContainersComponent } from './pages/containers/containers.component';
import { ServiceListViewComponent } from './pages/services/list-view/service-list-view.component';
import { TaskListViewComponent } from './pages/tasks/list-view/task-list-view.component';
import { NetworkModule } from 'app/pages/networks/network.module';
import { ServicesCardViewComponent } from 'app/pages/services/card-view/services-card-view.component';
import { ServicesOperationsComponent } from 'app/pages/services/operations/services-operations.component';
import { TaskCardViewComponent } from 'app/pages/tasks/card-view/task-card-view.component';
import { UserManagementModule } from 'app/pages/user-management/user-management.module';
import { VolumesModule } from 'app/pages/volumes/volumes.module';

import { UserBarComponent } from 'app/shared/user-bar/user-bar.component';
import { NavbarComponent } from 'app/shared/navbar/navbar.component';

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { TasksModule } from 'app/pages/tasks/tasks.module';
import { ServicesModule } from 'app/pages/services/services.module';
import { ContainersModule } from 'app/pages/containers/containers.module';
import { RefreshModule } from 'app/pages/refresh/refresh.module';

@NgModule({
    declarations: [
        AppComponent,
        UserBarComponent,
        NavbarComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        NgbModule.forRoot(),
        AppRoutingModule,
        AngularFontAwesomeModule,
        NetworkModule,
        UserManagementModule,
        VolumesModule,
        FormsModule,
        TasksModule,
        ServicesModule,
        ContainersModule,
        RefreshModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInjector,
            multi: true
        },
        AuthService,
        TokenStorage,
        ConfigurationService,
        ContainerService,
        TaskService,
        MockService,
        ServicesService,
        MockService,
        GraphService,
        AuthGuard,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
