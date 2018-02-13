import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RestangularModule } from 'ngx-restangular';
import { BsDropdownModule, ModalModule } from 'ngx-bootstrap';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { ToastModule } from 'ng2-toastr';
import { SharedModule } from './shared/shared.module';
import { NotificationModule } from 'patternfly-ng';

import { ConfigService, configServiceInitializer } from './config.service';
import { AppComponent } from './app.component';
import { AuthGuard } from './core/guard/auth.guard';

export function restangularProviderConfigurer(restangularProvider: any, config: ConfigService) {
  restangularProvider.setBaseUrl(config.getSettings().apiEndpoint);
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [  
  FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    NotificationModule,
    BrowserAnimationsModule,
    RestangularModule.forRoot([ConfigService], restangularProviderConfigurer),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ToastModule.forRoot(),
    AppRoutingModule,
    SharedModule,
    CoreModule    
  ],
  providers: [
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: configServiceInitializer,
      deps: [ConfigService],
      multi: true,
    },
    //Configuration,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
