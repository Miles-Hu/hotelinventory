import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { APP_CONFIG, APP_SERVICES_CONFIG } from './AppConfig/appconfig.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { RequestInterceptor } from './request.interceptor';
import { InitService } from './init.service';


function initFactory(initService: InitService) {
  return () => initService.init();
}

@NgModule({
  declarations: [ // register components, directives, pipes
    AppComponent, RoomsComponent, RoomsListComponent, HeaderComponent, ContainerComponent, EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule // import HttpClientModule from '@angular/common/http'
  ],

  providers: [
    {
      provide: APP_SERVICES_CONFIG,
      useValue: APP_CONFIG
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initFactory,
      deps: [InitService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
// this module knows everything
export class AppModule { }
