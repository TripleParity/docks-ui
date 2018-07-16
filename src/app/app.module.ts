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

import { AuthService } from './services/auth/auth.service';

import { AuthGuard } from './shared/guards/auth.guard';
import { ServicesService } from './services/services/services.service';

import { ConfigurationService } from './services/configuration/configuration.service';
import { ContainerService } from './services/container/container.service';
import { MockService } from './services/mock/mock.service';
import { TaskService } from './services/task/task.service';
import { GraphService } from './services/graphs/graph.service';

import { UserBarComponent } from 'app/shared/user-bar/user-bar.component';
import { NavbarComponent } from 'app/shared/navbar/navbar.component';

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
