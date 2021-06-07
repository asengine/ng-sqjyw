import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { AUTH_URL, BASE_URL, IDC_URL, JYW_URL, RDC_URL, RSJ_URL } from './core/config/service.config';
import { AuthGuard } from '@shared/guard';
import { environment } from '@env/environment';
import { DefaultInterceptor } from '@core/net/default.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GlobalConfigModule } from './global-config.module';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzModalService } from 'ng-zorro-antd/modal';
import { SharedModule } from '@shared';
import { LayoutComponent } from './routes/layout/layout.component';
import { DefaultComponent } from './routes/default/default.component';
import { RouteReuseStrategy } from '@angular/router';
import { CustomReuseStrategy } from '@core/providers/custom-reuse-strategy';

const INTERCEPTOR_PROVIDES = [
  //{ provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true }
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GlobalConfigModule.forRoot(),
    HttpClientModule,
    SharedModule,
    NzNotificationModule,
    AppRoutingModule
  ],
  providers: [
    ...INTERCEPTOR_PROVIDES,
    NzModalService,
    AuthGuard,
    { provide: RouteReuseStrategy, useClass: CustomReuseStrategy },
    { provide: BASE_URL, useValue: environment.BASE_URL },
    { provide: AUTH_URL, useValue: environment.AUTH_URL },
    { provide: JYW_URL, useValue: environment.JYW_URL },
    { provide: RSJ_URL, useValue: environment.RSJ_URL },
    { provide: RDC_URL, useValue: environment.RDC_URL },
    { provide: IDC_URL, useValue: environment.IDC_URL }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
